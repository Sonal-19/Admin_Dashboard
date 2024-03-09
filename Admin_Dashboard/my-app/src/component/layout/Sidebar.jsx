import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faShoppingBag, faUsers, faUserShield, faUsersCog,  faNewspaper, faTasks, faChartLine, faFileAlt, faAddressBook, faCaretDown, 
} from '@fortawesome/free-solid-svg-icons';
import { faAppStore } from '@fortawesome/free-brands-svg-icons';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState(null);

  const handleToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      <div className='sidebar col-2 mt-5'>
        <div className="sidebar-section" onClick={() => handleToggle('dashboard')} >
          <Link to="/Admin_Dashboard" className='section-link'>
            <span>
            <FontAwesomeIcon icon={faTachometerAlt} className="me-1 sidebar-icon" />
              Dashboard</span>
          </Link>
        </div>

        <div className="sidebar-section text-center" onClick={() => handleToggle('account')}>
          <Link to="/account" className='section-link'>
            <span>
            <FontAwesomeIcon icon={faUser} className="me-1 sidebar-icon" />
            Account 
            </span>
          </Link>
        </div>

        <div className="sidebar-section" onClick={() => handleToggle('product')}>
          <Link to="#" className='section-link'>
            <span> <FontAwesomeIcon icon={faShoppingBag} className="me-1 sidebar-icon" />
            Product</span>
            <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 'auto', marginRight: '5px' }} /> 
          </Link>
        </div>
        {activeSection === 'product' && (
          <>
            <div className='sub-menu sidebar-section'>
              <Link to="/productlist" className="sub-menu-link text-center">Product List</Link>
            </div>
            <div className='sub-menu sidebar-section'>
              <Link to="/addproduct" className="sub-menu-link text-center">Add New Product</Link>
            </div>
          </>
        )}

        <div className="sidebar-section" onClick={() => handleToggle('user account')}>
          <Link to="#" className='section-link'>
            <span>
            <FontAwesomeIcon icon={faUsers} className="me-1 sidebar-icon" />
            User
            </span>
            <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 'auto', marginRight: '5px' }} />
          </Link>
        </div>
        {activeSection === 'user account' && (
          <>
            <div className='sub-menu sidebar-section'>
              <Link to="/userlist" className='sub-menu-link text-center'>User List</Link>
            </div>
            <div className='sub-menu sidebar-section'>
              <Link to="/adduser" className='sub-menu-link text-center'>Add New User</Link>
            </div>
          </>
        )}

        <div className="sidebar-section" onClick={() => handleToggle('admin account')}>
          <Link to="#" className='section-link'>
            <span>
            <FontAwesomeIcon icon={faUserShield} className="me-1 sidebar-icon" />
            Admin
            </span>
            <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 'auto', marginRight: '5px' }} />
          </Link>
        </div>
        {activeSection === 'admin account' && (
          <>
            <div className='sub-menu sidebar-section'>
              <Link to="/adminlist" className='sub-menu-link text-center'>Admin List</Link>
            </div>
            <div className='sub-menu sidebar-section'>
              <Link to="/addadmin" className='sub-menu-link text-center'>Add New Admin</Link>
            </div>
          </>
        )}

        <div className="sidebar-section" onClick={() => handleToggle('customer policy')}>
          <Link to="#" className='section-link'>
            <span>
            <FontAwesomeIcon icon={faUsersCog} className="me-1 sidebar-icon" />
            Customer Policies
            </span>
            <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 'auto', marginRight: '5px' }} />
          </Link>
        </div>
        {activeSection === 'customer policy' && (
          <>
            <div className='sub-menu sidebar-section'>
              <Link to="/privacypolicy" className='sub-menu-link text-center'>Privacy Policy</Link>
            </div>
            <div className='sub-menu sidebar-section'>
              <Link to="/termsuse" className='sub-menu-link text-center'>Terms of Use</Link>
            </div>
            <div className='sub-menu sidebar-section'>
              <Link to="/termsconditions" className='sub-menu-link text-center'>Terms & Conditions</Link>
            </div>
          </>
        )}

        <div className="sidebar-section" onClick={() => handleToggle('news')}>
          <Link to="#" className='section-link'>
            <span>
            <FontAwesomeIcon icon={faNewspaper} className="me-1 sidebar-icon" />
            Blog
            </span>
            <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 'auto', marginRight: '5px' }} />
          </Link>
        </div>
        {activeSection === 'news' && (
          <>
            <div className='sub-menu sidebar-section'>
              <Link to="/bloglist" className='sub-menu-link text-center'>Blog List</Link>
            </div>
            <div className='sub-menu sidebar-section'>
              <Link to="/addblog" className='sub-menu-link text-center'>Add New Blog</Link>
            </div>
          </>
        )}

        <div className="sidebar-section" onClick={() => handleToggle('tasks')}>
          <Link to="#" className='section-link'>
            <span>
            <FontAwesomeIcon icon={faTasks} className="me-1 sidebar-icon" />
            Tasks
            </span>
            <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 'auto', marginRight: '5px' }} />
          </Link>
        </div>
        {activeSection === 'tasks' && (
          <>
            <div className='sub-menu sidebar-section'>
              <Link to="/todo" className='sub-menu-link text-center'>ToDo List</Link>
            </div>
          </>
        )}

        <div className="sidebar-section" onClick={() => handleToggle('analytics')}>
          <Link to="#" className='section-link'>
            <span>
            <FontAwesomeIcon icon={faChartLine} className="me-1 sidebar-icon" />
            Analytics
            </span>
            <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 'auto', marginRight: '5px' }} />
          </Link>
        </div>
        {activeSection === 'analytics' && (
          <>
            <div className='sub-menu sidebar-section'>
              <Link to="/chart" className='sub-menu-link text-center'>Chart List</Link>
            </div>
          </>
        )}

        <div className="sidebar-section" onClick={() => handleToggle('documents')}>
          <Link to="#" className='section-link'>
            <span>
            <FontAwesomeIcon icon={faFileAlt} className="me-1 sidebar-icon" />
            Progress Status 
            </span>
            <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 'auto', marginRight: '5px' }} />
          </Link>
        </div>
        {activeSection === 'documents' && (
          <>
            <div className='sub-menu sidebar-section'>
              <Link to="/progress" className='sub-menu-link text-center'>Progress Status</Link>
            </div>
          </>
        )}

      <div className="sidebar-section"
              onClick={() => handleToggle('page')}>
              <Link to="#" className='section-link'>
                <span>
                <FontAwesomeIcon icon={faAppStore} className="me-1 sidebar-icon" />
                  Pages</span>
                <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 'auto', marginRight: '5px' }} />
              </Link>
        </div>
            {activeSection === 'page' && (
            <>
            <div className='sub-menu sidebar-section'>
              <Link to="/signup" className='sub-menu-link text-center'>Sign Up</Link>
            </div>
            <div className='sub-menu sidebar-section'>
              <Link to="/login" className='sub-menu-link text-center'>Login </Link>
            </div>
            <div className='sub-menu sidebar-section'>
              <Link to="/forget" className='sub-menu-link text-center'>Forget Password</Link>
            </div>
            </>
            )}

        <div className="sidebar-section" onClick={() => handleToggle('contacts')}>
          <Link to="#" className='section-link'>
            <span>
            <FontAwesomeIcon icon={faAddressBook} className="me-1 sidebar-icon" />
            Contacts
            </span>
            <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 'auto', marginRight: '5px' }} />
          </Link>
        </div>
        {activeSection === 'contacts' && (
          <>
            <div className='sub-menu sidebar-section'>
              <Link to="/contactlist" className='sub-menu-link text-center'>Contact List</Link>
            </div>
          </>
        )}

      </div>
    </>
  );
}

