interface Service {
    serviceName: string;
    price: number;
    quantity: number;
    amount: number;
  }
  
  interface PatientData {
    patientName: string;
    age: string;
    gender: string;
    image: string;
    mobileNumber: number;
    date: string;
    time: string;
    receiptNo: number;
    bill: {
      billNo: number;
      tax: number;
      discount: number;
      total: number;
    };
    services: Service[];
  }

export const patientData: PatientData[] = [
    {
    patientName:"naman vaishnav",
    age:'12',
    gender:"male",
    image:"https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?w=1380&t=st=1690914100~exp=1690914700~hmac=a1bdb16a45b5b39011606d918a7db5d17979933aad0627df2e02637079bb3e7a",
    mobileNumber:8989237611,
    date:"02/02/2023",
    time:"06:23PM",
    receiptNo:12345678,
    bill:{
        billNo:898989,
        tax:200,
        discount:50,
        total:349489,
    },
    services:[
        {serviceName:"Consultation" , price:500, quantity:1, amount:500},
        {serviceName:"Consultation" , price:500, quantity:1, amount:500},
        {serviceName:"Consultation" , price:500, quantity:1, amount:500},
    ]
    },
    {
        patientName: "John Doe",
        age: '30',
        gender: "male",
        image: "https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?w=1380&t=st=1690914100~exp=1690914700~hmac=a1bdb16a45b5b39011606d918a7db5d17979933aad0627df2e02637079bb3e7a",
        mobileNumber: 1234567890,
        date: "03/08/2023",
        time: "10:30AM",
        receiptNo: 98765432,
        bill: {
          billNo: 987987,
          tax: 150,
          discount: 30,
          total: 900,
        },
        services: [
          { serviceName: "Consultation", price: 300, quantity: 2, amount: 600 },
          { serviceName: "Medication", price: 50, quantity: 5, amount: 250 },
        ],
      },
      {
        patientName: "Jane Smith",
        age: '25',
        gender: "female",
        image: "https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?w=1380&t=st=1690914100~exp=1690914700~hmac=a1bdb16a45b5b39011606d918a7db5d17979933aad0627df2e02637079bb3e7a",
        mobileNumber: 9876543210,
        date: "03/08/2023",
        time: "02:45PM",
        receiptNo: 56789012,
        bill: {
          billNo: 876876,
          tax: 100,
          discount: 20,
          total: 800,
        },
        services: [
          { serviceName: "Blood Test", price: 400, quantity: 1, amount: 400 },
          { serviceName: "X-Ray", price: 400, quantity: 1, amount: 400 },
        ],
      },
      {
        patientName: "Emily Johnson",
        age: '40',
        gender: "female",
        image: "https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?w=1380&t=st=1690914100~exp=1690914700~hmac=a1bdb16a45b5b39011606d918a7db5d17979933aad0627df2e02637079bb3e7a",
        mobileNumber: 8765432109,
        date: "03/08/2023",
        time: "04:15PM",
        receiptNo: 34567890,
        bill: {
          billNo: 765765,
          tax: 50,
          discount: 10,
          total: 400,
        },
        services: [
          { serviceName: "Vaccination", price: 200, quantity: 2, amount: 400 },
        ],
      },
      {
        patientName: "Michael Williams",
        age: '35',
        gender: "male",
        image: "https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?w=1380&t=st=1690914100~exp=1690914700~hmac=a1bdb16a45b5b39011606d918a7db5d17979933aad0627df2e02637079bb3e7a",
        mobileNumber: 7654321098,
        date: "03/08/2023",
        time: "05:30PM",
        receiptNo: 23456789,
        bill: {
          billNo: 654654,
          tax: 75,
          discount: 15,
          total: 450,
        },
        services: [
          { serviceName: "Physiotherapy", price: 150, quantity: 3, amount: 450 },
        ],
      },
      {
        patientName: "Olivia Brown",
        age: '28',
        gender: "female",
        image: "https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?w=1380&t=st=1690914100~exp=1690914700~hmac=a1bdb16a45b5b39011606d918a7db5d17979933aad0627df2e02637079bb3e7a",
        mobileNumber: 6543210987,
        date: "03/08/2023",
        time: "06:45PM",
        receiptNo: 12345678,
        bill: {
          billNo: 543543,
          tax: 25,
          discount: 5,
          total: 250,
        },
        services: [
          { serviceName: "Dental Checkup", price: 100, quantity: 2, amount: 200 },
          { serviceName: "Cleaning", price: 50, quantity: 1, amount: 50 },
        ],
      },
];