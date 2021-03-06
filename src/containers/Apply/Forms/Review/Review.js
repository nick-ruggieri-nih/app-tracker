import { useContext } from 'react';
import { Table } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import FormContext from '../../Context';
import SectionHeader from '../../../../components/UI/ReviewSectionHeader/ReviewSectionHeader';
import LabelValuePair from '../../../../components/UI/LabelValuePair/LabelValuePair';

import './Review.css';

const review = (props) => {
	const contextValue = useContext(FormContext);
	const { formData } = contextValue;

	const referencesColumns = [
		{ title: 'Name', dataIndex: 'firstName' },
		{ title: 'Email', dataIndex: 'email' },
		{ title: 'Phone', dataIndex: 'phoneNumber' },
	];

	const references = formData.references.map((reference, index) => ({
		key: index,
		...reference,
	}));

	return (
		<div>
			<SectionHeader
				title='Basic Information'
				onClick={() => props.onEditButtonClick(0)}
			/>
			<div className='SectionContent'>
				<div className='SectionContentRow'>
					<LabelValuePair
						label='First Name'
						value={formData.basicInfo.firstName}
					/>
					<LabelValuePair
						label='Middle Name'
						value={formData.basicInfo.middleName}
					/>
					<LabelValuePair
						label='Last Name'
						value={formData.basicInfo.lastName}
					/>
				</div>
				<div className='SectionContentRow'>
					<LabelValuePair
						label='Email Address'
						value={formData.basicInfo.email}
					/>
				</div>
				<div className='SectionContentRow'>
					<LabelValuePair label='Phone' value={formData.basicInfo.phone} />
					<LabelValuePair
						label='Business Phone'
						value={formData.basicInfo.businessPhone}
					/>
				</div>
			</div>
			<SectionHeader
				title='Address'
				onClick={() => props.onEditButtonClick(1)}
			/>
			<div className='SectionContent'>
				<div className='SectionContentRow'>
					<LabelValuePair
						label='Address Line 1'
						value={formData.address.address}
					/>
					<LabelValuePair
						label='Address Line 2'
						value={formData.address.address2}
					/>
				</div>
				<div className='SectionContentRow'>
					<LabelValuePair label='City' value={formData.address.city} />
					<LabelValuePair
						label='State'
						value={formData.address.stateProvince}
					/>
					<LabelValuePair label='Post Code' value={formData.address.zip} />
				</div>
			</div>
			<SectionHeader
				title='References'
				onClick={() => props.onEditButtonClick(2)}
			/>
			<div className='SectionContent'>
				<Table
					key='email'
					pagination={{ hideOnSinglePage: true }}
					locale={{
						emptyText: 'No references.',
					}}
					dataSource={references}
					columns={referencesColumns}
				/>
			</div>
			<SectionHeader
				title='Application Documents'
				onClick={() => props.onEditButtonClick(3)}
			/>
			<div className='SectionContent'>
				{formData.applicantDocuments.map((document, index) => (
					<div key={index}>
						{document.file.fileList.length > 0 ? '✓ ' : '× '}
						{document.title.value}
						{document.file.fileList.map((file, index) => (
							<div className='FileListRow' key={index}>
								<FileTextOutlined /> {file.name}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default review;
