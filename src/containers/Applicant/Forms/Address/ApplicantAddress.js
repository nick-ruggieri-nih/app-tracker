import {
	Form,
	Input,
	Slider,
	DatePicker,
	InputNumber,
	Button,
	Select,
} from 'antd';
import './ApplicantAddress.css';

const ApplicantAddress = () => {
	return (
		<Form layout='vertical' name='Address' style={{ paddingLeft: '10px' }}>
			<h3 className='form-title'>Address</h3>
			<div className='addressLines'>
				<Form.Item
					name={['user', 'address', 'one']}
					label='Address Line One'
					style={{ display: 'inline-block', width: '375.55px' }}
					rules={[
						{
							required: true,
							message: 'Please enter address',
						},
					]}
				>
					<Input placeholder='Please Enter' />
				</Form.Item>
				<Form.Item
					name={['user', 'address', 'two']}
					label='Address Line Two'
					style={{
						display: 'inline-block',
						marginLeft: '10px',
						width: '375.55px',
					}}
				>
					<Input placeholder='Please Enter' />
				</Form.Item>
			</div>
			<div className='cityStateProv'>
				<Form.Item
					name={['user', 'city']}
					label='City'
					style={{ display: 'inline-block', width: '375.55px' }}
					rules={[
						{
							required: true,
							message: 'Please enter city',
						},
					]}
				>
					<Input placeholder='Please Enter' />
				</Form.Item>
				<Form.Item
					name={['user', 'state', 'province']}
					label='State/Province'
					style={{
						display: 'inline-block',
						marginLeft: '10px',
						width: '375.55px',
					}}
					rules={[
						{
							required: true,
							message: 'Please enter state/province',
						},
					]}
				>
					<Input placeholder='Please Enter' />
				</Form.Item>
			</div>
			<Form.Item
				name={['user', 'country']}
				label='Country'
				style={{ display: 'inline-block', width: '375.55px' }}
				rules={[
					{
						required: true,
						message: 'Please enter state/province',
					},
				]}
			>
				<Input placeholder='Please Enter' />
			</Form.Item>
			<Form.Item
				name={['user', 'zip']}
				label='Zip / Postal Code'
				style={{
					display: 'inline-block',
					marginLeft: '10px',
					width: '375.55px',
				}}
				rules={[
					{
						required: true,
						message: 'Please enter zip/postal code',
					},
				]}
			>
				<Input placeholder='Please Enter' />
			</Form.Item>
			{/* <Form.Item
				name={['user', 'zip']}
				label='Zip / Postal Code'
				style={{
					display: 'inline-block',
					marginLeft: '10px',
					width: '375.55px',
				}}
				rules={[
					{
						required: true,
						message: 'Please enter zip/postal code',
					},
					() => ({
						validator(_, value) {
							let regEx = new RegExp('^([0-9]{5})(?:[-s]*([0-9]{4}))?$');

							if (!value || regEx.test(value) == true) {
								return Promise.resolve();
							}
							return Promise.reject(new Error('Enter a valid zip/postal code'));
						},
					}),
				]}
			>
				<Input placeholder='Please Enter' />
			</Form.Item> */}
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default ApplicantAddress;
