export default (categories, articleCategories) => {
  if(articleCategories) {
    let selfCategories = [];
    for (var key in articleCategories) {
      if(articleCategories[key] == true) {
        selfCategories.push(key)
      }
    }
    let selfCategoriesName = [];
    selfCategories.forEach((selfCategory) => {
      categories.forEach( (category) => {
        if(category.id === selfCategory) {
          selfCategoriesName.push({ id: selfCategory, name: category.name});
        }   
      });
    });
    return selfCategoriesName;
  }
}