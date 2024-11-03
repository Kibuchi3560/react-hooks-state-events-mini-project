import React from 'react';

function CategoryFilter({ categories, setCategorySelected, categorySelected }) {
  const displayCategoryButtons = categories.map((category) => {
    return (
      <button
        key={category}
        onClick={() => setCategorySelected(category)}
        className={categorySelected === category ? 'selected' : null}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {displayCategoryButtons}
    </div>
  );
}

export default CategoryFilter;