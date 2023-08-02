import React from 'react';
import SideBar from '../../components/SideBar';
import { MdOutlineWindow } from 'react-icons/md';
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { BsCalendarEvent } from 'react-icons/bs';
import { RiBillLine } from 'react-icons/ri';
import { TbVectorBezierCircle } from 'react-icons/tb';
import { Outlet } from 'react-router-dom';

interface MenuItem {
  title: string;
  icon: JSX.Element;
  path: string;
}

const middleMenus: MenuItem[] = [
  { title: 'Dashboard', icon: <MdOutlineWindow size={30} />, path: '/admin' },
  { title: 'Patient', icon: <AiOutlineUser size={30} />, path: '/admin/patient' },
  { title: 'Appointment', icon: <BsCalendarEvent size={30} />, path: '/admin' },
  { title: 'Billing', icon: <RiBillLine size={30} />, path: '/admin/billing' },
];

const endMenus: MenuItem[] = [
  { title: 'Support', icon: <TbVectorBezierCircle size={30} />, path: '/' },
  { title: 'Setting', icon: <AiOutlineSetting size={30} />, path: '/' },
];

const AdminDashboard: React.FC = () => {
  return (
    <>
      <SideBar logo={'Medically'} middleMenus={middleMenus} endMenus={endMenus} />
      <div className="main-box w-[86%] bg-[#f1f5f9] absolute right-0 h-screen rounded-[15px]">
        <div className="w-[95%] m-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
