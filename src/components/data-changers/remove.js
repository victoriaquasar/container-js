import { compare } from "../../lib/recursiveComparator.js";

export const remove = (reference, target) => {
    let result;
        switch(reference.type()) {
            case "Array":
                result = [];
                reference.content().forEach(element => {
                    if(!compare(element, target)) {
                        result.push(element);
                    }
                });
                reference.set(result);
                break;

            case "Object":
                result = {};
                Object.entries(reference.content()).forEach(entry => {
                    if(!compare(entry[1], target)) {
                        result[entry[0]] = entry[1];
                    }
                });
                reference.set(result);
                break;
            
            case "Map":
                result = new Map();
                reference.content().forEach(value, key => {
                    if(!compare(reference.content().get(key), target)) {
                        result.set(key, value);
                    }
                });
                reference.set(result);
                break;

            case "Set":
                result = [];
                Array.from(reference.content()).forEach(element => {
                    if(!compare(element, target)) {
                        result.push(element);
                    }
                });
                reference.set(new Set(result));
                break;

            case "String":
                reference.set(reference.content().replaceAll(target, ""));
                break;
        }
        return reference.content();
}