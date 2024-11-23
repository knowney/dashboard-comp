import { Link } from 'react-router-dom';
import * as Icon from '@ant-design/icons';

interface MenusProps {
  role: string;
}

export const Menus = (props: MenusProps) => {
  const { role } = props;

  const menus = [
    {
      label: <Link to="/admin/analytic">ภาพรวม</Link>,
      key: '/admin/analytic',
      icon: <Icon.PieChartOutlined />,
      role: ['super_admin', 'owner'],
      // disable: true,
    },
    {
      label: <Link to="/user">การเเข่งขัน</Link>,
      key: '/user',
      icon: <Icon.DashboardOutlined />,
      role: ['owner', 'manager'],
    },

    {
      label: <Link to="/admin/organize">ข่าวสาร</Link>,
      key: '/admin/organize',
      icon: <Icon.ScheduleOutlined />,
      role: ['super_admin', 'owner'],
    },
    {
      //<Link to="/admin/employee">พนักงาน</Link>,
      label: <Link to="/admin/employee">พนักงาน</Link>,
      key: '/admin/employee',
      icon: <Icon.UserOutlined />,
      role: ['super_admin'],
      // disable: true,
    },
    // {
    //   label: <Link to="/analytic">วิเคราะห์</Link>,
    //   key: '/analytic',
    //   icon: <Icon.PieChartOutlined />,
    //   role: ['owner', 'manager'],
    // },
    // {
    //   label: <Link to="/branch">สาขา</Link>,
    //   key: '/branch',
    //   icon: <Icon.BranchesOutlined />,
    //   role: ['owner'],
    // },
    {
      label: <b style={{ color: 'grey' }}>จัดการการแข่งขัน</b>,
      icon: <Icon.FieldTimeOutlined style={{ color: 'grey' }} />,
      role: ['owner', 'manager', 'supervisor', 'employee'],
      key: '/attendance-menu',
      children: [
        {
          label: <Link to="/attendance">กรรมการ</Link>,
          icon: <Icon.DashboardOutlined />,
          role: ['owner', 'manager', 'supervisor'],
          key: '/attendance',
        },
        {
          label: <Link to="/attendance/action">ใบประเมิน</Link>,
          icon: <Icon.PlayCircleOutlined />,
          role: ['owner', 'manager', 'supervisor', 'employee'],
          key: '/attendance/action',
        },

        {
          label: <Link to="/approval">การเเข่งขัน</Link>,
          icon: <Icon.CarryOutOutlined />,
          role: ['owner', 'manager', 'supervisor', 'employee'],
          key: '/approval',
        },
        {
          label: <Link to="/appointment">ใบประเมินผลการเข่งขัน</Link>,
          icon: <Icon.ScheduleOutlined />,
          role: ['manager', 'supervisor', 'employee'],
          key: '/appointment',
        },
        // {
        //   label: (
        //     <Link to="/attendance/attendance-overview">ข้อมูลเชิงลึก</Link>
        //   ),
        //   icon: <Icon.DashboardOutlined />,
        //   role: ['owner', 'manager', 'supervisor', 'employee'],
        //   key: '/attendance/attendance-overview',
        // },
      ],
    },

    // {
    //   //  <Link to="/customer">
    //   label: <Link to="/customer">ลูกค้า</Link>,
    //   key: '/customer',
    //   icon: <Icon.CustomerServiceOutlined />,
    //   role: ['owner', 'manager'],
    // },
    // {
    //   //<Link to="/notation">
    //   label: (
    //     <Link to="#" style={{ cursor: 'not-allowed' }}>
    //       เอกสาร
    //     </Link>
    //   ),
    //   key: '/notation',
    //   icon: <Icon.ReconciliationOutlined />,
    //   role: ['owner', 'manager'],
    //   disable: true,
    // },

    // {
    //   //<Link to="/project">
    //   label: (
    //     <Link to="#" style={{ cursor: 'not-allowed' }}>
    //       โครงการ
    //     </Link>
    //   ),
    //   key: '/project',
    //   icon: <Icon.ProjectOutlined />,
    //   role: ['owner', 'manager'],
    //   disable: true,
    // },
    // {
    //   label: <Link to="/setting">ตั้งค่า</Link>,
    //   key: "setting",
    //   icon: <Icon.SettingOutlined />,
    //   role: ["branch_admin","organize_admin"],
    // },
    // {
    //   // <Link to="/attendance">
    //   label: (
    //     <Link to="#" style={{ cursor: 'not-allowed' }}>
    //       เข้างานออกงาน
    //     </Link>
    //   ),
    //   key: '/attendance',
    //   icon: <Icon.FieldTimeOutlined />,
    //   role: ['owner', 'manager', 'supervisor', 'employee'],
    //   disable: true,
    // },
    {
      //<Link to="/information-branch">
      label: (
        <Link to="#" style={{ cursor: 'not-allowed' }}>
          ข้อมูลสาขา
        </Link>
      ),
      key: '/information-branch',
      icon: <Icon.SettingOutlined />,
      role: ['manager'],
      disable: true,
    },
    {
      // <Link to="/information">
      label: <Link to="/information">ตั้งค่า</Link>,
      key: '/information',
      icon: <Icon.SettingOutlined />,
      role: ['owner'],
      // disable: true,
    },
  ];
  // return menus.filter((m) =>  m.role.includes(role) );

  const filterMenusByRole = (menus: any, userRole: any) => {
    return menus
      .filter((menu: any) => menu.role.includes(userRole)) // Filter out menus the user doesn't have access to
      .map((menu: any) => {
        // If the menu has children (submenus), we recursively filter the children as well
        if (menu.children) {
          const filteredChildren = filterMenusByRole(menu.children, userRole);
          return { ...menu, children: filteredChildren };
        }
        return menu;
      });
  };

  const showMenus = filterMenusByRole(menus, role);
  return showMenus;
};
