import { User } from './user.class';

export class Request {
    id:number;
    description:string;
    justification:string;
    deliveryMode:string;
    status:string;
    total:number;
    userId:number
    user:User;
    dateRequested:number;
    rejectionReason:string;
    constructor(id:number=0,desc:string="",just:string="",
                del:string="",stat:string="", tot:number=0,userid:number=0,
                user:User=new User(),date:number=0,rr:string="none provided"){
                    this.id=id;
                    this.description=desc;
                    this.justification=just;
                    this.deliveryMode=del;
                    this.status=stat;
                    this.total=tot;
                    this.userId=userid;
                    this.user=user;
                    this.dateRequested=date;
                    this.rejectionReason=rr;
                }
}
