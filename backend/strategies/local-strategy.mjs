import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/user.mjs";
import { comparePassword } from "../middleware/helpers.mjs";

passport.serializeUser((user, done) => {
    done(null, user.user_id);
});

passport.deserializeUser(async (id, done) => {
    console.log('inside deserialize');
    console.log(`user id: ${id}`);
    try {
        const findUser = await User.findOne({ where: {user_id: id } });
        if (!findUser) throw new Error("User not found");
        done(null, findUser);
    } catch (error) {
        done(error, null);
    }
});

passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
    try {
        console.log(email);
        const findUser = await User.findOne({ where: { email } });
        if (!findUser) {
            console.log('User not Found');
            done(null, false, { message: 'User not found' });
        }
        if (!comparePassword(password, findUser.password)) throw new Error('Bad Credential');
        console.log(findUser)
        done(null, findUser);
    } catch (error) {
        console.log(error);
        done(error);
    }
}));

export default passport;
