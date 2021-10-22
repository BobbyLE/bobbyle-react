import React from 'react'
import generateRandomFilename from 'uuid';
import { extractExtension } from './_lib'
import { ref, uploadBytesResumable } from 'firebase/storage'


const Uploader = (props) => {
  const { 
    name,
    storageRef,
    randomizeFilename,
    onProgress, 
    onUploadError,
    onUploadStart, 
    onUploadSuccess, 
  } = props

  const handleImageUploader = event => {
    const { target: { files } } = event
    handleFirebaseUpload(files[0])
  }

  const handleFirebaseUpload = file => {
    let filenameToUse = randomizeFilename ? generateRandomFilename() : file.name;

    // Ensure there is an extension in the filename
    if (!extractExtension(filenameToUse)) {
      filenameToUse += extractExtension(file.name);
    }

    if(onUploadStart) {
      onUploadStart(file)
    }
    
    const storageRefWithFile = ref(storageRef, filenameToUse)
    const uploadTask = uploadBytesResumable(storageRefWithFile, file);
    
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = Math.round(100 * snapshot.bytesTransferred / snapshot.totalBytes)

        if(onProgress) {
          onProgress(progress)
        }
        // switch (snapshot.state) {
        //   case 'paused':
        //     console.log('Upload is paused')
        //     break;
        //   case 'running':
        //     console.log('Upload is running')
        //     break;
        // }
      }, 
      (error) => {
        if(onUploadError) {
          onUploadError(error)
        }
      }, 
      async () => {
        onUploadSuccess(filenameToUse)
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        // const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
      }
      
    )
  }
  
  return (
    <input 
      type="file"
      accept="image/*"
      name={name}
      onChange={handleImageUploader}
    />
  )
}

export default Uploader