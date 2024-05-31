import mongoose from 'mongoose';

type UserType = {
    _id: string;
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    createdDate: { type: Date, default: Date.now, required: false },
});


const UserModel = mongoose.model<UserType>("User", userSchema);

export { UserType };
export default UserModel;