import {mapField, mapSelect} from './form-mapping/index'


export const mapComponents = (type, data) => {
  switch (type) {
    case "Input":
      return mapField(data)

    case "Select":
      return mapSelect(data)
  }
};
