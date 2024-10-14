const app = document.getElementById('app');

const model = {
    app: { 
        pages: ['mainView','loginView','registrationView','userView','adminView','adminUserView',],
        logo: null,
        page: 'mainView',
        usrId: '',
    },

    input: {
        registration: {
            id: null,
            firstname: null,
            lastname: null,
            email: null,
            password: null,
            phone: null,
            age: null,
            gender: null,
            ethnicity: null,
            driverLicence: null,
            place: null,
            interest: null,
            exp: null,
            time: null,
            travel: null,
            info: null,
            picture: null,
        },
    
        login: {
            username: null,
            password: null,
         },

        searchField: {
            place: null,          
            fname: null,
            lname: null,
            age: null,
            interest: null,
            gender: null,
            ethnicity: null,
            driverLicence: null,
            searchword: null,
            time: null,
            exp: null,
            travel: null,
            interest: null,
            place: null,
            phone: null,
        },

        autogen: {  // automatisk id produsering
            id: 2,
            noteId: 0,
            adminId: 0,
        }

        
    },

    data: {
        users: {
            admin:[  
                {  // høyeste form for admin privileger
                id: 'A 123',
                name: "admin",
                password: "admin",
                edit: true,
                mission: true,
                delete: true,
                adminLVL: 1,
            },
     
                

          
                { 
                    id: 231,
                    name: "admin2",
                    password: "admin2",
                    edit: true,
                    mission: true,
                    delete: false,
                    adminLVL: 2,
                },
            

                {
                    id: 321,
                    name: "admin3",
                    password: "admin3",
                    edit: false,
                    mission: true,
                    delete: false,
                    adminLVL: 3,
                },
            ],
       
        
    

            // usr = user
            usr:[
                
                {
                    id: 1232323,
                    fname: "usrFname", // first name
                    lname: "ursLname", // last name
                    password: "usrPassword",
                    gender: "male/female",
                    email: "name@mail.no",
                    phone: "12312323",
                    age: 420,
                    ethnicity: "Norsk",
                    driverLicence: ['A', 'B','C', 'D'],
                    place: "Moss",
                    interest: ['Strikking', 'bingo', 'bake kake'],
                    exp: "Dr. Grad i strikking",
                    date: ['dato'],
                   // time: [{startTime: 0, endTime: 0,}],
                    travel: "Så langt som mulig",
                    info: "Jeg er veldig smart",
                    picture: "path/to/picture.png",
                    mission: [
                        {
                            patientId: '',
                            location: '',
                            duration: '',
                            information: '',
                    }
                    ],
                    note: [
                        {
                            noteId: null,
                            adminUsername: null,
                            noteText: null,
                        }
                         ],
                },

                {
                    id: 2323232,
                    fname: null, // first name
                    lname: null, // last name
                    password: 123,
                    gender: null,
                    email: 'abc@123.no',
                    phone: null,
                    age: null,
                    ethnicity: null,
                    driverLicence: null,
                    place: null,
                    interest: null,
                    exp: null,
                    time: null,
                    travel: null,
                    info: null,
                    picture: null,
                    mission: null,
                    note: [                        
                        {
                        noteId: null,
                        adminUsername: null,
                        noteText: null,
                    }],

                    mission: [
                        {
                            userId: [],
                            patientId: '',
                            location: '',
                            duration: '',
                            information: '',
                    }
                    ],
                    
                    userInterests: [],
                    adminViewResult: [],
                }
            ],
        }
    },
}


