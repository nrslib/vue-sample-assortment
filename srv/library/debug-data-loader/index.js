import {ClientError} from "../errors/client-parameter-error";
import ClientParameterError from "../../library/errors/client-parameter-error";
import fs from 'fs';

export default function (routeName, method) {
    const json = JSON.parse(fs.readFileSync('./debug/' + routeName + "/" + method + ".json", "utf-8"));
    if (json.errors) {
        const errors = json.errors.map(x => new ClientError(x.code, x.item));
        throw new ClientParameterError(errors);
    }

    return json;
}