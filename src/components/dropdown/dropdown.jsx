import React, { Fragment, useState } from "react";
import "./dropdown-styles.css";

function MultiItemLabel({ value = [], onClickMenuItem }) {
  return (
    <div className="multi-item">
      {value.length === 0 ? (
        <span>Select ...</span>
      ) : (
        <Fragment>
          {value.map((item, index) => {
            const { value, label } = item;
            return (
              <button
                key={value}
                className="multi-item-label"
                onClick={(e) => e.stopPropagation()}
              >
                {label}
                <div
                  className="multi-item-delete-btn"
                  onClick={(e) => onClickMenuItem(item, index, e)}
                >
                  x
                </div>
              </button>
            );
          })}
        </Fragment>
      )}
    </div>
  );
}

export function Dropdown({
  id,
  selectedValue = undefined,
  options = [],
  isMulti = false,
}) {
  const [selectedItems, setSelectedItems] = useState(selectedValue);
  const [activeItem, setActiveItem] = useState(selectedValue);
  const [isOpen, setIsOpen] = useState(false);

  function onClickMenuItem(item, indx, e) {
    e.stopPropagation();
    if (isMulti) {
      if (selectedItems === undefined) {
        setSelectedItems([item]);
      } else if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter((e) => e !== item));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    } else {
      setSelectedItems(item);
      setActiveItem(indx);
    }
    setIsOpen(false);
  }

  function onClearSelected(e) {
    e.stopPropagation();
    isMulti ? setSelectedItems([]) : setSelectedItems(undefined);
    setActiveItem(undefined);
  }

  function onClickSelectAll(e) {
    e.stopPropagation();
    setSelectedItems(options);
    setIsOpen(false);
  }

  function IsActive(item, index) {
    return isMulti ? selectedItems?.includes(item) : index === activeItem;
  }

  function isValueEmpty() {
    if (isMulti) {
      return selectedItems === undefined || selectedItems.length === 0;
    } else {
      return selectedItems?.value === undefined;
    }
  }

  return (
    <div
      id={id}
      className="dropdown"
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
    >
      <div
        className="dropdown-select"
        onClick={(e) => {
          setIsOpen((prev) => !prev);
          console.log("opening");
        }}
      >
        {isMulti ? (
          <MultiItemLabel
            value={selectedItems}
            onClickMenuItem={onClickMenuItem}
          />
        ) : (
          selectedItems?.label || <span>Select ...</span>
        )}
        <div className="dropdown-select-options">
          {!isValueEmpty() && (
            <button onClick={(e) => onClearSelected(e)}>X</button>
          )}
          <div className="divider"></div>
          <div className="carat-arrow">
            {isOpen ? <span>˅</span> : <span>˄</span>}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {isMulti && (
            <div
              className={`dropdown-item`}
              onClick={(e) => onClickSelectAll(e)}
            >
              --- Select All ---
            </div>
          )}
          {options.map((item, index) => {
            const { label, value } = item;
            return (
              <div
                key={value}
                className={`dropdown-item ${
                  IsActive(item, index) ? "active" : ""
                }`}
                value={value}
                onClick={(e) => onClickMenuItem(item, index, e)}
              >
                {label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
