import React from 'react'

export const Footer = () => {
  return (
    <div className='login_footer'>
    <div className='site_footer'>
      <div>
          <a href='' className='contact_me'>Bạn có câu hỏi? Liên hệ với chúng tôi.</a>
      </div>
      <ul>
          <li><a href='' className='contact_section'>Câu hỏi thường gặp</a></li>
          <li><a href='' className='contact_section'>Trung tâm trợ giúp</a></li>
          <li><a href='' className='contact_section'>Điều khoản sử dụng</a></li>
          <li><a href='' className='contact_section'>Quyền riêng tư</a></li>
          <li><a href='' className='contact_section'>Tùy chọn cookie</a></li>
          <li><a href='' className='contact_section'>Thông tin doanh nghiệp</a></li>
      </ul>
      <div className='select_option'>
          <select id='languages'>
              <option value='VN'>Tiếng Việt</option>
              <option value='US'>English</option>
          </select>
      </div>
    </div>
    
  </div>
  )
}