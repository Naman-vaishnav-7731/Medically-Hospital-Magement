import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import TopBar from '../../components/TopBar/TopBar';
import PatientCard from '../../components/PatientCard';
import BillFrame from '../../components/BillFrame';
import { patientData } from '../../helper/patientData';
import { BillData } from '../../components/BillFrame';

interface Bill {
  billNo: number;
  tax: number;
  discount: number;
  total: number;
}

interface Service {
  serviceName: string;
  price: number;
  quantity: number;
  amount: number;
}

interface PatientInfoProps {
  patientData: {
    patientName: string;
    age: string;
    gender: string;
    image: string;
    mobileNumber: number;
    date: string;
    time: string;
    receiptNo: number;
    bill: Bill;
    services: Service[];
  };
}

const Billing: React.FC = () => {
  const [patientsInfo, setPatientInfo] = useState<PatientInfoProps[]>([]);
  const [viewBill, setViewBill] = useState<BillData>();   
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    handleSearch(searchQuery);
    if (searchQuery === '') setPatientInfo(patientData.map((patient) => ({ patientData: patient })));
  }, [searchQuery]);

  const handleViewPrescription = (patientData: BillData) => {
    console.log(patientData);
    setViewBill(patientData);
  };

  const handleSearch = (searchQuery: string) => {
    const filterPatient = patientsInfo.filter((patient) =>
      patient.patientData.patientName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPatientInfo(filterPatient || patientData);
  };

  return (
    <>
      <TopBar handleSearch={setSearchQuery} />
      <Heading headingTitle={'Billing Overview'} />
      <div className="container flex w-full mt-4">
        <div className="list-of-patient h-[718px] flex flex-col gap-8 w-[30%] items-center overflow-y-auto">
          {patientsInfo.map((patient) => {
            return (
              <PatientCard
                key={patient.patientData.bill.billNo}
                name={patient.patientData.patientName}
                image={patient.patientData.image}
                billNo={patient.patientData.bill.billNo}
                age={patient.patientData.age}
                gender={patient.patientData.gender}
                handelViewPrescription={handleViewPrescription}
                pateintData={patient.patientData}
              />
            );
          })}
        </div>
        <div className="patient-bill w-[70%]">
          <BillFrame billData={viewBill} />
        </div>
      </div>
    </>
  );
};

export default Billing;
