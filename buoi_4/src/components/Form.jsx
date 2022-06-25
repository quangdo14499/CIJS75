import React from 'react';
import { Input } from './Input';

export const Form = () => {
    return (
        <div className='login_body'>
        <div className='login_form'>
            <form className='login_form_main'>
                <h1>Đăng nhập</h1>
                <Input/>
                <div className='login_form_help'>
                    <div className='remember_me'>
                        <input type='checkbox' name='tick' value='' />
                        <p> Ghi nhớ tôi</p>
                    </div>
                    <a className='login-help-link' href={'#'}>Bạn cần trợ giúp?</a>
                </div>
                <div className='login_form_other'>
                    <div className='fb_login'>
                        <a href='' className='icon_fb'><img src='https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png' className='icon_fb'/> </a>
                        <a href='' className='fb_now'>Đăng nhập bằng tài khoản Facebook </a>
                    </div>
                    <div className='login_now'>
                        <p>Bạn mới tham gia Netflix? <a href='#' className='now'>Đăng ký ngay.</a></p>
                    </div>
                    <div className='login_more'>
                        <p>Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot. <a href='#' className='more'>Tìm hiểu thêm.</a></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
  }
  