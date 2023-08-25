import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from 'react-router-dom';
import React from "react";

const ActionTabs = () => {

    return <List sx={{ minWidth: '220px', p: 0 }}>
        <Link to='/courses' key='profile'>
            <ListItemButton >
        
                <ListItemText primary="Courses" />
            </ListItemButton>
        </Link>
        <Divider />
        <Link to='/applicants' key='orders'>
            <ListItemButton>
             
                <ListItemText primary='Applicants' />
            </ListItemButton>
        </Link>
        <Divider />
        <Link to='/staff-members' key='staffMembers'>
            <ListItemButton>
         
                <ListItemText primary='Staff Members' />
            </ListItemButton>
        </Link>

        <Divider />
        <Link to='/admissions' key='admissions'>
            <ListItemButton>
                <ListItemText primary='Admissions' />
            </ListItemButton>
        </Link>

        <Divider />
        <Link to='/admission-committee' key='admissionCommitte'>
            <ListItemButton>
                <ListItemText primary='Admission Committee' />
            </ListItemButton>
        </Link>
    </List>;
}


export default ActionTabs;