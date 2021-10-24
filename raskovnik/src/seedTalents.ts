import "reflect-metadata";
import {createConnection} from "typeorm";
import {talents} from "./entity/talents";

createConnection().then(async connection =>{
    const talent = new talents();
    talent.name = "Koplje";
    talent.description = "Test";
    talent.requerments ="Nan";
    talent.type="Maneuver";
    talent.actionCost=1;
    await  connection.manager.save(talent);
}).catch(error => console.log(error));