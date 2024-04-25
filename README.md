
![simple-blog-top](https://github.com/andrei-bancos/simple-blog/assets/42214745/bcb12acb-f56b-4dee-94dc-3e14a7e6d330)

## Simple Blog

A simple blog-type web application, created using nextjs.

Few features:
- Authentication for admin using next-auth with google provider
- Admin panel
- Web analytics
- TipTap text editor
- Images of articles are saved in the cloud using cloudinary
- Prisma orm with MongoDB

### How to use?
#### First create .env file with your data
```dotenv
DATABASE_URL="mongodb+srv://test:test@cluster0.ns1yp.mongodb.net/myFirstDatabase"

# If you run in production use https://yourdomain.tld
# https://generate-secret.vercel.app/32 for generate NEXTAUTH_SECRET
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

# Google provider (https://console.developers.google.com/apis/credentials)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_ADMIN_EMAIL=

# RECAPTCHA (https://www.google.com/recaptcha/about/)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_PRIVATE_KEY=

# Cloudinary (https://cloudinary.com/)
NEXT_PUBLIC_CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
NEXT_PUBLIC_MICROSOFT_CLARITY_ID=
```
#### After use `npm run dev` or `npm run build` and `npm run start`
