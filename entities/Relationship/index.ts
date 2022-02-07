import {Id} from "../common";
import { SchemasBase} from "../CustomerEntity";

export interface Relationship extends SchemasBase {
    childSchemaId: Id;
    parentSchemaId: Id;
}
