import "reflect-metadata";
import {createConnection} from "typeorm";
import {spells} from "../entity/spells";
import {getConnection} from "typeorm";

createConnection().then(async connection => {
    console.log("Researching magical spells.")
    await getConnection().createQueryBuilder().insert()
        .into(spells)
        .values([
            {
                name: "1"
                ,energyType:"11"
                ,casting:1
                ,description:"1"
                ,reaction:true
            },{
                name: "1"
                ,energyType:"11"
                ,casting:1
                ,description:"1"
                ,reaction:false
            }
        ]).execute();
}).catch(error => console.log(error));