import { serverHttp } from "./app";

serverHttp.listen(3333, () => console.log(`server listen in port ${3333}`));
