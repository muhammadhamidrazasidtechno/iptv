import React, { useState } from "react";
import { List, arrayMove } from "react-movable";

function Category() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  return (
    <List
      values={items}
      onChange={({ oldIndex, newIndex }) =>
        setItems(arrayMove(items, oldIndex, newIndex))
      }
      renderList={({ children, props }) => <ul {...props}>{children}</ul>}
      renderItem={({ value, props }) => <li {...props}>{value}</li>}
    />
  );
}

export default Category;
