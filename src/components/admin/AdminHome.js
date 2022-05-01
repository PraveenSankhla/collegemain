import React from 'react';
import './AdminHome.css';

const AdminHome = () =>{
    return (
        <div className='adminhome'>
        <div className='logoutbtn'>
        <button>Log Out</button>
        </div>
        <div className='adminbtn'>
            <a href='./new' target={'_blank'}><button>
                Add News
            </button></a>

            <a href='./uploadvolume' target={'_blank'}><button>
                Add Volume
            </button></a>
        </div>
        </div>
    );
};

export default AdminHome;
