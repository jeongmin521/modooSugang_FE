import React, { useState, useEffect } from 'react';
import ManagerTimeTable from './ManagerTimeTable';
import ManagerBoxLayout from './ManagerBoxLayout';
import FileUploadButton from '../assets/FileUploadButton';
import { Grid } from '@mui/material';
import axios from 'axios';

export default function ManagerTimetableBox() {
    const columns = React.useMemo(
        () => [
            {
                accessor: 'code' ,
                Header: '과목코드',
            },
            {
                accessor:  'lecture' ,
                Header:     '과목명',
            },
            {
                accessor: 'department',
                Header: '학과'
            },
            {
                accessor:  'category' ,
                Header: '전공/교양'
            },
            {
                accessor:   'time',
                Header: '시간'
            },
            {
                accessor:  'grade' ,
                Header: '학년'
            },
            {
                accessor:  'score' ,
                Header: '학점'
            },
            {
                accessor:  'professor' ,
                Header: '교수',
            },
            {
                accessor:  'to' ,
                Header: '잔여 인원',
            },
        ],
        []
    );
    sessionStorage.setItem('univ','카카오대학교');
    // 서버에 api 요청 (GET)
    const [resData, setResData] = React.useState([]);
    const InitGetMethod = async() => {
        await axios({
            url: '/api/manage/timetable/'+ sessionStorage.getItem('univ'),
            method: 'GET',
            baseURL: 'http://localhost:8080',
            withCredentials: true.valueOf,
            data: {
                univ:univName,
            }
        },
        )
        .then(function callback(response){
            console.log(response.data)
            setResData(response.data);
        })
        .catch(function CallbackERROR(response){
            console.log('fail');
        });
    }

    const [univName, setUniv] = React.useState("");
    React.useEffect(() => {
        const univ = sessionStorage.getItem('univ');
        if(univ){
            setUniv(univ);
        }
    },[]);
    
    React.useEffect(()=> {
        InitGetMethod();
    },[]);
    
    return (
        <ManagerBoxLayout>
            <ManagerTimeTable columns={columns} data={resData}></ManagerTimeTable>
            <Grid  container justifyContent='flex-end'>
                <FileUploadButton></FileUploadButton>
            </Grid>
        </ManagerBoxLayout>
    );
}
