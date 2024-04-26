//tuple
const goodStatus:[code:number,status:string] = [200,"OK"]
const notFound:[code:number,status:string] = [404,"Error"]
const badRequest:[code:number,status:string] = [400,"Invalid Access"]
const serverError:[code:number,status:string] = [404,"Internal Server Error"]

//tuple with create Type
type HttpStatusCode=[number,string]
const goodStatus:HttpStatusCode = [200,"OK"]
const notFound:HttpStatusCode = [404,"Error"]
const badRequest:HttpStatusCode = [400,"Invalid Access"]
const serverError:HttpStatusCode = [404,"Internal Server Error"]


