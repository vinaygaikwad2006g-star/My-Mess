# My Mess - Student Mess Management System

A modern, fully responsive web application for managing student mess operations. Built with HTML5, CSS3, and Vanilla JavaScript.

## 🌟 Features

### Student Portal
- 📋 Meal tracking and attendance
- 💰 Payment management and billing
- 📅 Attendance calendar
- 📊 Personal statistics

### Admin Portal
- 👥 Student management
- 🍽️ Meal management
- 💳 Payment tracking
- 📈 Analytics and reports

## 🚀 Deployment Guide

### Prerequisites
- GitHub account (free at github.com)
- Firebase account (free at firebase.google.com)
- Netlify account (free at netlify.com)

### Step 1: Set Up Firebase

1. Go to [firebase.google.com](https://firebase.google.com)
2. Click "Get Started" → "Create a project"
3. Name: `my-mess`
4. Enable Firestore Database (Start in test mode)
5. Enable Authentication (Email/Password)
6. Go to Project Settings (⚙️)
7. Copy your Firebase Config
8. Paste it in `index.html` in the Firebase script section

### Step 2: Prepare for GitHub

1. Create a new repository named `my-mess`
2. Clone it to your computer: `git clone https://github.com/YOUR_USERNAME/my-mess.git`
3. Copy all project files into the repository folder
4. Create a `.gitignore` file with:
```
node_modules/
.env
.env.local
firebase-config.js
```

### Step 3: Push to GitHub

```bash
git add .
git commit -m "Initial commit - My Mess application"
git push origin main
```

### Step 4: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your `my-mess` repository
5. Click "Deploy site"
6. Your site will be live in minutes!

### Step 5: Configure Environment Variables (Optional)

For production security:
1. Go to Netlify Site Settings
2. Go to "Build & deploy" → "Environment"
3. Add your Firebase config values as environment variables
4. Update `index.html` to read from environment variables

## 📁 Project Structure

```
my-mess/
├── index.html              # Home page
├── student-dashboard.html  # Student portal
├── admin-dashboard.html    # Admin portal
├── styles.css             # Main styles
├── dashboard.css          # Dashboard styles
├── script.js              # Main functionality
├── dashboard.js           # Dashboard functionality
├── firebase-config.js     # Firebase configuration
├── DEPLOYMENT_GUIDE.md    # Deployment instructions
└── README.md              # This file
```

## 🔐 Security

- Admin registration requires a secret code: `ADMIN2025SECURE`
- User authentication via Firebase
- Firestore security rules for data protection
- HTTPS enabled on Netlify (automatic)

## 📊 Pricing Breakdown

| Service | Cost | Limit |
|---------|------|-------|
| Netlify Hosting | FREE | 300 build mins/month |
| Firebase Firestore | FREE | 50K reads/20K writes/day |
| Firebase Auth | FREE | Unlimited users |
| Custom Domain | ~$10/year | Optional |

**Total: $0 Forever!**

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Firebase (Firestore + Authentication)
- **Hosting**: Netlify
- **Database**: Firestore
- **Design**: Responsive & Mobile-First

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔄 Future Enhancements

- [ ] Payment gateway integration (Stripe/Razorpay)
- [ ] SMS notifications
- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] Bulk operations
- [ ] Email notifications

## 📚 Documentation

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to GitHub
5. Create a Pull Request

## 📞 Support

For issues or questions:
- Check the deployment guide
- Review Firebase documentation
- Check Netlify documentation

## 📄 License

This project is open source and available under the MIT License.

## 👥 Author

Created with ❤️ for students

---

**Live Demo**: [Coming Soon - Your Netlify URL]
**Repository**: https://github.com/YOUR_USERNAME/my-mess

---

### Quick Links

- [Firebase Console](https://console.firebase.google.com)
- [Netlify Dashboard](https://app.netlify.com)
- [GitHub](https://github.com)
- [Poppins Font](https://fonts.google.com/specimen/Poppins)

**Made for Students, by Students** ❤️
