import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: '15d'
  })

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 1000, //MS-milli second
    httpOnly: true, //Prevent XSS attacks
    sameSite: "strict", //CSRF attacks
    secure: process.env.NODE_ENV !== "development",
  })
}

export default generateTokenAndSetCookie;