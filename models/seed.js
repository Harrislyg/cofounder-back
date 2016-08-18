require('dotenv').config()

var seeder = require('mongoose-seed')

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/user.js'
  ])

  // Clear specified collections
  seeder.clearModels(['User'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {process.exit()})
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'User',
    'documents': [
      {
        'name': 'Wayne Goh',
        'email': 'wayne@gmail.com',
        'password': 'password',
        'expertise': 'Developer',
        'workexp': "My expertise and background is in software engineering full stack-iOS(C++/C#/Objective-c/Swift)/nodeJS/Android(Java)/Python, mBaaS platforms, node.js along with in electrical design and hardware prototyping. My experiences have taken me to banking, first to development positions, to architecture design, and then to management positions. I'm returning back to my roots, what I love most, as a full stack hardware/software developer. My strength is in execution, bringing an idea from concept to production while my weakness is in marketing and UI/UX.",
        'skills': ['Marketing', 'Web Development', 'Sales'],
        'education': 'NUS',
        'age': '28',
        'location': 'Singapore',
        'partnerexpertise': 'Designer',
        'partnerworkexp': ['Technology', 'F&B'],
        'partnerskills': ['UI', 'UX'],
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png'
      },
      {
        'name': 'Bobby Goh',
        'email': 'bob@gmail.com',
        'password': 'password',
        'expertise': 'Developer',
        'workexp': "My expertise and background is in software engineering full stack-iOS(C++/C#/Objective-c/Swift)/nodeJS/Android(Java)/Python, mBaaS platforms, node.js along with in electrical design and hardware prototyping. My experiences have taken me to banking, first to development positions, to architecture design, and then to management positions. I'm returning back to my roots, what I love most, as a full stack hardware/software developer. My strength is in execution, bringing an idea from concept to production while my weakness is in marketing and UI/UX.",
        'skills': ['Marketing', 'Web Development', 'Sales'],
        'education': 'NUS',
        'age': '28',
        'location': 'Singapore',
        'partnerexpertise': 'Designer',
        'partnerworkexp': ['Technology', 'F&B'],
        'partnerskills': ['UI', 'UX'],
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png'

      },
      {
        'name': 'Amelia Tan',
        'email': 'amelia@gmail.com',
        'password': 'password',
        'expertise': 'Developer',
        'workexp': "My expertise and background is in software engineering full stack-iOS(C++/C#/Objective-c/Swift)/nodeJS/Android(Java)/Python, mBaaS platforms, node.js along with in electrical design and hardware prototyping. My experiences have taken me to banking, first to development positions, to architecture design, and then to management positions. I'm returning back to my roots, what I love most, as a full stack hardware/software developer. My strength is in execution, bringing an idea from concept to production while my weakness is in marketing and UI/UX.",
        'skills': ['Marketing', 'Web Development', 'Sales'],
        'education': 'NUS',
        'age': '28',
        'location': 'Singapore',
        'partnerexpertise': 'Designer',
        'partnerworkexp': ['Technology', 'F&B'],
        'partnerskills': ['UI', 'UX'],
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png'

      },
      {
        'name': 'Elias Lim',
        'email': 'eliase@gmail.com',
        'password': 'password',
        'expertise': 'Developer',
        'workexp': "My expertise and background is in software engineering full stack-iOS(C++/C#/Objective-c/Swift)/nodeJS/Android(Java)/Python, mBaaS platforms, node.js along with in electrical design and hardware prototyping. My experiences have taken me to banking, first to development positions, to architecture design, and then to management positions. I'm returning back to my roots, what I love most, as a full stack hardware/software developer. My strength is in execution, bringing an idea from concept to production while my weakness is in marketing and UI/UX.",
        'skills': ['Marketing', 'Web Development', 'Sales'],
        'education': 'NUS',
        'age': '28',
        'location': 'Singapore',
        'partnerexpertise': 'Designer',
        'partnerworkexp': ['Technology', 'F&B'],
        'partnerskills': ['UI', 'UX'],
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png'

      },
      {
        'name': 'Jon',
        'email': 'jon@gmail.com',
        'password': '123',
        'expertise': 'Hustler',
        'workexp': 'I believe that my purpose in life is to deliver value to this world through my creativity, skills and passion. I have a strong passion in the fitness industry as I feel it is very rewarding to offer my service to help change people’s lives for the better. Also within me, I have a natural curiosity and drive towards technology and its use in solving novel problems. I’m constantly seeking creative ways to package my technical knowledge and skills to deliver something valuable to the world. I am a grad from Georgia Tech with a BA in Electrical Engineering, with working experience in hardware design, and a strong interest and experience in programming and software development.',
        'skills': ['Marketing', 'Web Development', 'Sales'],
        'education': 'NUS',
        'age': '28',
        'location': 'Singapore',
        'partnerexpertise': 'Developer',
        'partnerworkexp': ['Technology', 'F&B'],
        'partnerskills': ['UI', 'UX'],
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png'

      },
      {
        'name': 'Gab',
        'email': 'gab@gmail.com',
        'password': '123',
        'expertise': 'Designer',
        'workexp': 'I believe that my purpose in life is to deliver value to this world through my creativity, skills and passion. I have a strong passion in the fitness industry as I feel it is very rewarding to offer my service to help change people’s lives for the better. Also within me, I have a natural curiosity and drive towards technology and its use in solving novel problems. I’m constantly seeking creative ways to package my technical knowledge and skills to deliver something valuable to the world. I am a grad from Georgia Tech with a BA in Electrical Engineering, with working experience in hardware design, and a strong interest and experience in programming and software development.',
        'skills': ['Marketing', 'Web Development', 'Sales'],
        'education': 'NUS',
        'age': '28',
        'location': 'Singapore',
        'partnerexpertise': 'Hustler',
        'partnerworkexp': ['Technology', 'F&B'],
        'partnerskills': ['UI', 'UX'],
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png'

      },
      {
        'name': 'Jeremiah',
        'email': 'jeremiah@gmail.com',
        'password': '123',
        'expertise': 'Engineer',
        'workexp': 'I believe that my purpose in life is to deliver value to this world through my creativity, skills and passion. I have a strong passion in the fitness industry as I feel it is very rewarding to offer my service to help change people’s lives for the better. Also within me, I have a natural curiosity and drive towards technology and its use in solving novel problems. I’m constantly seeking creative ways to package my technical knowledge and skills to deliver something valuable to the world. I am a grad from Georgia Tech with a BA in Electrical Engineering, with working experience in hardware design, and a strong interest and experience in programming and software development.',
        'skills': ['Marketing', 'Web Development', 'Sales'],
        'education': 'NUS',
        'age': '28',
        'location': 'Singapore',
        'partnerexpertise': 'Developer',
        'partnerworkexp': ['Technology', 'F&B'],
        'partnerskills': ['UI', 'UX'],
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png'

      }
    ]
  }

]
