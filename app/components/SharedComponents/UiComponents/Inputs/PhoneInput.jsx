import { Form, Input, Select, Button, message, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const { Option } = Select;

const PhoneInput = ({form}) => {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('966');

  const countries = [
    { name: 'Saudi Arabia', code: '966', flag: 'https://flagcdn.com/w320/sa.png' },
    { name: 'United States', code: '1', flag: 'https://flagcdn.com/w320/us.png' },
    { name: 'United Kingdom', code: '44', flag: 'https://flagcdn.com/w320/gb.png' },
    { name: 'India', code: '91', flag: 'https://flagcdn.com/w320/in.png' },
    { name: 'Egypt', code: '20', flag: 'https://flagcdn.com/w320/eg.png' },
  ];
  

  const handleSelectedCode = (value)=>{
     setCountryCode(value)
     form.setFieldsValue({phone_code:value})
  }

  return (
    <div className='flex items-center gap-3'>
      <Form.Item
        initialValue={countryCode}
        label="رقم الهاتف"
        name="phone_code"
        rules={[{ required: true, message: 'رمز الدولة مطلوب' }]}
      >
        <Select
          value={countryCode}
          onChange={(value) => handleSelectedCode(value)}
          className='w-[120px]'
          defaultValue={countryCode}
        >
          {countries?.map((country) => (
            <Option key={country.code} value={country.code}>
              <div className='flex items-center justify-end gap-2 my-2'>
                {country.code}
                <Image
                  width={29}
                  height={19}
                  src={country.flag}
                  alt={country.name}
                />
              </div>
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
      className='flex-1'
        label=" "
        name="phone"
        rules={[{ required: true, message: 'رقم الهاتف مطلوب' }]}
      >
        <Input
          placeholder="أدخل رقم الهاتف"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Item>
      </div>

  );
};

export default PhoneInput;
