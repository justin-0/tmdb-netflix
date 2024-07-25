import { Document, ObjectId } from "mongoose";

interface IUser {
  email: string;
  username: string;
  password: string;
  searchHistory: any[];
}

export interface UserDocument extends Document, IUser {
  _doc: IUser & { _id: ObjectId };
}
