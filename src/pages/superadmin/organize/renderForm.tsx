export const renderForm = [
  /*Organize Section*/
  //FIXME:add upload logo url

  {
    label: 'ข้อมูลองค์กร',
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'SectionLabelForm',
  },
  {
    name: 'active',
    label: 'ปิดองค์กร',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'ActiveCard',
    title: 'ปิดองค์กร',
    description:
      'ใช้สำหรับการปิดหรือยุติการทำงานขององค์กรในระบบหรือเว็บไซต์ ซึ่งอาจรวมถึงการปิดการใช้งานบัญชีองค์กร',
    rule: [{ required: true, message: 'กรุณาเลือกเปิดปิดองค์กร!' }],
  },
  {
    name: 'status',
    label: 'สถานะธุรกิจ',
    placeholder: 'สถานะธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'NewlyRegistered', label: 'ลูกค้าที่เพิ่งลงทะเบียนใหม่ในระบบ' },
      { value: 'ActiveUser', label: 'ลูกค้าที่ใช้งานอย่างต่อเนื่อง' },
      { value: 'LoyalCustomer', label: 'ลูกค้าที่มีความภักดีต่อระบบ' },
      { value: 'AtRisk', label: 'ลูกค้าที่อาจจะเสี่ยงต่อการหยุดใช้งาน' },
      { value: 'Churned', label: 'ลูกค้าที่ได้หยุดใช้บริการหรือยกเลิกบัญชี' },
    ],
    defaultValue: 'NewlyRegistered',
    rule: [{ required: true, message: 'กรุณาเลือกสถานะธุรกิจ!' }],
  },

  {
    name: 'fromType',
    label: 'ประเภทธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'RadioFormField',
    options: [
      { value: 'OrdinaryPerson', label: 'บุคคลธรรมดา' },
      { value: 'JuristicPerson', label: 'นิติบุคคล' },
    ],
    defaultValue: 'OrdinaryPerson',
    rule: [{ required: true, message: 'กรุณาเลือกประเภทธุรกิจ!' }],
  },
  {
    name: 'type',
    label: 'รูปแบบธุรกิจ',
    placeholder: 'รูปแบบธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'CompanyLimited', label: 'บริษัทจำกัด' },
      { value: 'PublicCompanyLimited', label: 'บริษัทมหาชนจำกัด' },
      { value: 'LimitedPartnership', label: 'ห้างหุ้นส่วนจำกัด' },
      { value: 'Foundation', label: 'มูลนิธิ' },
      { value: 'Association', label: 'สมาคม' },
      { value: 'JointVenture', label: 'กิจการร่วมค้า' },
      { value: 'Others', label: 'อื่นๆ' },
    ],
    rule: [{ required: true, message: 'กรุณาเลือกรูปแบบธุรกิจ!' }],
  },
  {
    name: 'nameTh',
    label: 'ชื่อกิจการ (ภาษาไทย)',
    placeholder: 'ชื่อกิจการ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกชื่อกิจการ (ภาษาไทย)!' }],
    isName: true,
  },
  {
    name: 'nameEn',
    label: 'ชื่อกิจการ (English)',
    placeholder: 'ชื่อกิจการ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกชื่อกิจการ (English)!' }],
    isName: true,
  },
  {
    name: 'taxId',
    label: 'เลขทะเบียน 13 หลัก',
    placeholder: 'เลขทะเบียน 13 หลัก',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'LengthInput',
    maxLength: 13,
    rule: [{ required: true, message: 'กรุณากรอกเลขทะเบียน 13 หลัก!' }],
  },
  {
    name: 'registerVat',
    label: 'จดทะเบียนภาษีมูลค่าเพิ่ม',
    placeholder: 'จดทะเบียนภาษีมูลค่าเพิ่ม',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SwitchFormField',
    rule: [
      {
        required: true,
        message: 'กรุณาเลือกว่าจดทะเบียนภาษีมูลค่าเพิ่มหรือไม่!',
      },
    ],
    checkedText: 'จด',
    unCheckedText: 'ไม่ได้จด',
  },

  {
    name: 'descriptionsTh',
    label: 'คำอธิบายธุรกิจ (ภาษาไทย)',
    placeholder: 'คำอธิบายธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextAreaFormField',
  },
  {
    name: 'descriptionsEn',
    label: 'คำอธิบายธุรกิจ (English)',
    placeholder: 'คำอธิบายธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextAreaFormField',
  },

  {
    name: 'openingDate',
    label: 'วันที่จดทะเบียน',
    placeholder: 'วันที่จดทะเบียน',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'DatePickerFormField',
  },
  {
    name: 'websiteUrl',
    label: 'เว็ปไซต์สำนักงาน',
    placeholder: 'เว็ปไซต์สำนักงาน',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  /*Setting Section*/

  {
    name: ['setting', 'defaultLanguage'],
    label: 'ภาษา',
    placeholder: 'ภาษา',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'TH', label: 'ภาษาไทย' },
      { value: 'EN', label: 'English' },
    ],
    defaultValue: 'TH',
    rule: [{ required: true, message: 'กรุณาเลือกภาษา!' }],
  },
  {
    name: ['setting', 'domainName'],
    label: 'ชื่อโดเมน',
    placeholder: 'ชื่อโดเมน ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกชื่อโดเมน!' }],
  },
  {
    name: ['setting', 'theme'],
    label: 'ธีมสี',
    placeholder: 'ธีมสี',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'light', label: 'สว่าง' },
      { value: 'dark', label: 'มืด' },
    ],
    defaultValue: 'light',
  },
  {
    name: ['setting', 'textDisplay'],
    label: 'ตัวอักษร',
    placeholder: 'ตัวอักษร',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'large', label: 'ขนาดใหญ่' },
      { value: 'normal', label: 'ปกติ' },
      { value: 'small', label: 'ขนาดเล็ก' },
    ],
    defaultValue: 'normal',
  },

  {
    label: 'ข้อมูลที่อยู่',
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'SectionLabelForm',
  },
  {
    name: ['address', 'city'],
    label: 'เมือง',
    placeholder: 'เมือง',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกเมือง!' }],
  },
  {
    name: ['address', 'province'],
    label: 'จังหวัด',
    placeholder: 'จังหวัด',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกจังหวัด!' }],
  },
  {
    name: ['address', 'postalCode'],
    label: 'รหัสไปรษณีย์',
    placeholder: 'รหัสไปรษณีย์',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกรหัสไปรษณีย์!' }],
  },
  { col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 } },
  {
    name: ['address', 'roomNo'],
    label: 'เลขห้อง',
    placeholder: 'เลขห้อง',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },
  {
    name: ['address', 'floorNo'],
    label: 'ชั้นที่อยู่',
    placeholder: 'ชั้นที่อยู่',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },
  {
    name: ['address', 'village'],
    label: 'หมู่บ้าน',
    placeholder: 'หมู่บ้าน',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },
  {
    name: ['address', 'villageNo'],
    label: 'เลขหมู่บ้าน',
    placeholder: 'เลขหมู่บ้าน',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },
  {
    name: ['address', 'houseNo'],
    label: 'บ้านเลขที่',
    placeholder: 'บ้านเลขที่',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },
  {
    name: ['address', 'alley'],
    label: 'ตรอก',
    placeholder: 'ตรอก',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },
  {
    name: ['address', 'road'],
    label: 'ถนน',
    placeholder: 'ถนน',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },
  {
    name: ['address', 'building'],
    label: 'อาคาร',
    placeholder: 'อาคาร',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },

  {
    name: ['address', 'nation'],
    label: 'ประเทศ',
    placeholder: 'ประเทศ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  {
    name: ['address', 'district'],
    label: 'เขต/อำเภอ',
    placeholder: 'เขต/อำเภอ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    name: ['address', 'subDistrict'],
    label: 'แขวง/ตำบล',
    placeholder: 'แขวง/ตำบล',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  {
    name: ['address', 'note'],
    label: 'หมายเหตุ',
    placeholder: 'หมายเหตุ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextAreaFormField',
  },
  {
    label: 'ข้อมูลช่องทางการติดต่อ',
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'SectionLabelForm',
  },

  {
    name: 'contactPhone',
    label: 'เบอร์โทรศัพท์ติดต่อ',
    placeholder: 'เบอร์โทรศัพท์ติดต่อ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'PhoneInput',
    rule: [{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์ติดต่อ!' }],
  },
  {
    name: 'contactEmail',
    label: 'อีเมลติดต่อ',
    placeholder: 'อีเมลติดต่อ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกเบอร์อีเมลติดต่อ!' }],
  },
  {
    name: 'contactWebsite',
    label: 'เว็บไซต์ติดต่อ',
    placeholder: 'เว็บไซต์ติดต่อ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    name: 'businessEmail',
    label: 'อีเมลสำนักงาน',
    placeholder: 'อีเมลสำนักงาน',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  {
    name: 'contactFacebook',
    label: 'Facebook',
    placeholder: 'Facebook',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    name: 'contactLine',
    label: 'Line ID',
    placeholder: 'line Id',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  {
    name: 'contactWhatsapp',
    label: 'WhatsApp',
    placeholder: 'WhatsApp',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    name: 'contactNote',
    label: 'ข้อมูลการติดต่อ',
    placeholder: 'ข้อมูลการติดต่อ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  /*Branch Section*/

  //FIXME:add upload logo url
  {
    label: 'ข้อมูลสาขา',
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'SectionLabelForm',
  },
  {
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'ButtonGetOrganizeValue',
  },
  {
    name: ['branch', 'isMain'],
    label: 'ประเภทสาขา',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'RadioFormField',
    options: [
      { value: true, label: 'สำนักงานใหญ่' },
      { value: false, label: 'สาขา' },
    ],
    defaultValue: true,
    rule: [{ required: true, message: 'กรุณาเลือกประเภทสาขา!' }],
  },
  {
    name: ['branch', 'fromType'],
    label: 'ประเภทธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'RadioFormField',
    options: [
      { value: 'OrdinaryPerson', label: 'บุคคลธรรมดา' },
      { value: 'JuristicPerson', label: 'นิติบุคคล' },
    ],
    defaultValue: 'OrdinaryPerson',
    rule: [{ required: true, message: 'กรุณาเลือกประเภทธุรกิจ!' }],
  },
  {
    name: ['branch', 'type'],
    label: 'รูปแบบธุรกิจ',
    placeholder: 'รูปแบบธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'CompanyLimited', label: 'บริษัทจำกัด' },
      { value: 'PublicCompanyLimited', label: 'บริษัทมหาชนจำกัด' },
      { value: 'LimitedPartnership', label: 'ห้างหุ้นส่วนจำกัด' },
      { value: 'Foundation', label: 'มูลนิธิ' },
      { value: 'Association', label: 'สมาคม' },
      { value: 'JointVenture', label: 'กิจการร่วมค้า' },
      { value: 'Others', label: 'อื่นๆ' },
    ],
    rule: [{ required: true, message: 'กรุณาเลือกรูปแบบธุรกิจ!' }],
  },
  {
    name: ['branch', 'status'],
    label: 'สถานะธุรกิจ',
    placeholder: 'สถานะธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'NewlyRegistered', label: 'ลูกค้าที่เพิ่งลงทะเบียนใหม่ในระบบ' },
      { value: 'ActiveUser', label: 'ลูกค้าที่ใช้งานอย่างต่อเนื่อง' },
      { value: 'LoyalCustomer', label: 'ลูกค้าที่มีความภักดีต่อระบบ' },
      { value: 'AtRisk', label: 'ลูกค้าที่อาจจะเสี่ยงต่อการหยุดใช้งาน' },
      { value: 'Churned', label: 'ลูกค้าที่ได้หยุดใช้บริการหรือยกเลิกบัญชี' },
    ],
    defaultValue: 'NewlyRegistered',
    rule: [{ required: true, message: 'กรุณาเลือกสถานะธุรกิจ!' }],
  },
  {
    name: ['branch', 'nameTh'],
    label: 'ชื่อสาขา (ภาษาไทย)',
    placeholder: 'ชื่อสาขา (ภาษาไทย)',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกชื่อสาขา (ภาษาไทย)!' }],
  },
  {
    name: ['branch', 'nameEn'],
    label: 'ชื่อกิจการ (English)',
    placeholder: 'ชื่อกิจการ (English)',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกชื่อสาขา (English)!' }],
  },
  {
    name: ['branch', 'taxId'],
    label: 'เลขทะเบียน 13 หลัก',
    placeholder: 'เลขทะเบียน 13 หลัก',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'LengthInput',
    maxLength: 13,
    rule: [{ required: true, message: 'กรุณากรอกเลขทะเบียน 13 หลัก!' }],
  },

  {
    name: ['branch', 'branchCode'],
    label: 'รหัสสาขา',
    placeholder: 'รหัสสาขา',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกรหัสสาขา!' }],
  },
  {
    name: ['branch', 'openingDate'],
    label: 'วันที่จดทะเบียน',
    placeholder: 'วันที่จดทะเบียน',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'DatePickerFormField',
  },
  {
    name: ['branch', 'websiteUrl'],
    label: 'เว็ปไซต์สำนักงาน',
    placeholder: 'เว็ปไซต์สำนักงาน',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    name: ['branch', 'contactPhone'],
    label: 'เบอร์โทรศัพท์ติดต่อ',
    placeholder: 'เบอร์โทรศัพท์ติดต่อ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'PhoneInput',
  },
  {
    name: ['branch', 'contactEmail'],
    label: 'อีเมลติดต่อ',
    placeholder: 'อีเมลล์',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  {
    name: ['branch', 'registerVat'],
    label: 'จดทะเบียนภาษีมูลค่าเพิ่ม',
    placeholder: 'จดทะเบียนภาษีมูลค่าเพิ่ม',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SwitchFormField',
    checkedText: 'จด',
    unCheckedText: 'ไม่ได้จด',
  },

  {
    label: 'ข้อมูลที่อยู่สาขา',
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'SectionLabelForm',
  },

  {
    name: ['branch', 'address', 'city'],
    label: 'เมือง',
    placeholder: 'เมือง',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกเมือง!' }],
  },
  {
    name: ['branch', 'address', 'province'],
    label: 'จังหวัด',
    placeholder: 'จังหวัด',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกจังหวัด!' }],
  },
  {
    name: ['branch', 'address', 'postalCode'],
    label: 'รหัสไปรษณีย์',
    placeholder: 'รหัสไปรษณีย์',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกรหัสไปรษณีย์!' }],
  },
  { col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 } },
  {
    name: ['branch', 'address', 'roomNo'],
    label: 'เลขห้อง',
    placeholder: 'เลขห้อง',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },
  {
    name: ['branch', 'address', 'floorNo'],
    label: 'ชั้นที่อยู่',
    placeholder: 'ชั้นที่อยู่',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },
  {
    name: ['branch', 'address', 'village'],
    label: 'หมู่บ้าน',
    placeholder: 'หมู่บ้าน',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },
  {
    name: ['branch', 'address', 'villageNo'],
    label: 'เลขหมู่บ้าน',
    placeholder: 'เลขหมู่บ้าน',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },
  {
    name: ['branch', 'address', 'houseNo'],
    label: 'บ้านเลขที่',
    placeholder: 'บ้านเลขที่',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },
  {
    name: ['branch', 'address', 'alley'],
    label: 'ตรอก',
    placeholder: 'ตรอก',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },
  {
    name: ['branch', 'address', 'road'],
    label: 'ถนน',
    placeholder: 'ถนน',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },
  {
    name: ['branch', 'address', 'building'],
    label: 'อาคาร',
    placeholder: 'อาคาร',
    col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
    type: 'TextboxFormField',
  },

  {
    name: ['branch', 'address', 'nation'],
    label: 'ประเทศ',
    placeholder: 'ประเทศ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  {
    name: ['branch', 'address', 'district'],
    label: 'เขต/อำเภอ',
    placeholder: 'เขต/อำเภอ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    name: ['branch', 'address', 'subDistrict'],
    label: 'แขวง/ตำบล',
    placeholder: 'แขวง/ตำบล',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  {
    name: ['branch', 'address', 'note'],
    label: 'หมายเหตุ',
    placeholder: 'หมายเหตุ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextAreaFormField',
  },

  /*User Section*/

  //FIXME:add upload image
  {
    label: 'เพิ่มผู้ใช้',
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'SectionLabelForm',
  },
  {
    name: ['user', 'email'],
    label: 'อีเมล',
    placeholder: 'อีเมล',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [
      { required: true, message: 'กรุณากรอกอีเมลผู้ใช้งาน!' },
      {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'กรุณากรอกอีเมลที่ถูกต้อง!',
      },
    ],
  },
  {
    name: ['user', 'password'],
    label: 'รหัสผ่าน',
    placeholder: 'รหัสผ่าน',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกรหัสผ่านผู้ใช้งาน!' }],
  },

  {
    name: ['user', 'profile', 'firstName'],
    label: 'ชื่อ',
    placeholder: 'ชื่อ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกชื่อผู้ใช้งาน!' }],
  },
  {
    name: ['user', 'profile', 'lastName'],
    label: 'นามสกุล',
    placeholder: 'นามสกุล',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    name: ['user', 'userName'],
    label: 'ชื่อผู้ใช้',
    placeholder: 'ชื่อผู้ใช้',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    name: ['user', 'profile', 'birthDate'],
    label: 'วันเกิด',
    placeholder: 'วันเกิด',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'DatePickerFormField',
  },
  {
    name: ['user', 'profile', 'phone'],
    label: 'เบอร์โทรศัพท์ติดต่อ',
    placeholder: 'เบอร์โทรศัพท์ติดต่อ ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'PhoneInput',
  },
];

export const renderEditForm = [
  //FIXME:add upload logo url

  {
    label: 'ข้อมูลองค์กร',
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'SectionLabelForm',
  },
  {
    label: 'รูปภาพองค์กร',
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'UploadFile',
  },
  {
    name: 'active',
    label: 'ปิดองค์กร',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'ActiveCard',
    title: 'ปิดองค์กร',
    description:
      'ใช้สำหรับการปิดหรือยุติการทำงานขององค์กรในระบบหรือเว็บไซต์ ซึ่งอาจรวมถึงการปิดการใช้งานบัญชีองค์กร',
    rule: [{ required: true, message: 'กรุณาเลือกเปิดปิดองค์กร!' }],
  },
  {
    name: 'status',
    label: 'สถานะธุรกิจ',
    placeholder: 'สถานะธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'NewlyRegistered', label: 'ลูกค้าที่เพิ่งลงทะเบียนใหม่ในระบบ' },
      { value: 'ActiveUser', label: 'ลูกค้าที่ใช้งานอย่างต่อเนื่อง' },
      { value: 'LoyalCustomer', label: 'ลูกค้าที่มีความภักดีต่อระบบ' },
      { value: 'AtRisk', label: 'ลูกค้าที่อาจจะเสี่ยงต่อการหยุดใช้งาน' },
      { value: 'Churned', label: 'ลูกค้าที่ได้หยุดใช้บริการหรือยกเลิกบัญชี' },
    ],
    defaultValue: 'NewlyRegistered',
    rule: [{ required: true, message: 'กรุณาเลือกสถานะธุรกิจ!' }],
  },

  {
    name: 'fromType',
    label: 'ประเภทธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'RadioFormField',
    options: [
      { value: 'OrdinaryPerson', label: 'บุคคลธรรมดา' },
      { value: 'JuristicPerson', label: 'นิติบุคคล' },
    ],
    defaultValue: 'OrdinaryPerson',
    rule: [{ required: true, message: 'กรุณาเลือกประเภทธุรกิจ!' }],
  },
  {
    name: 'type',
    label: 'รูปแบบธุรกิจ',
    placeholder: 'รูปแบบธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'CompanyLimited', label: 'บริษัทจำกัด' },
      { value: 'PublicCompanyLimited', label: 'บริษัทมหาชนจำกัด' },
      { value: 'LimitedPartnership', label: 'ห้างหุ้นส่วนจำกัด' },
      { value: 'Foundation', label: 'มูลนิธิ' },
      { value: 'Association', label: 'สมาคม' },
      { value: 'JointVenture', label: 'กิจการร่วมค้า' },
      { value: 'Others', label: 'อื่นๆ' },
    ],
    rule: [{ required: true, message: 'กรุณาเลือกรูปแบบธุรกิจ!' }],
  },
  {
    name: 'nameTh',
    label: 'ชื่อกิจการ (ภาษาไทย)',
    placeholder: 'ชื่อกิจการ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกชื่อกิจการ (ภาษาไทย)!' }],
    isName: true,
  },
  {
    name: 'nameEn',
    label: 'ชื่อกิจการ (English)',
    placeholder: 'ชื่อกิจการ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกชื่อกิจการ (English)!' }],
    isName: true,
  },
  {
    name: 'taxId',
    label: 'เลขทะเบียน 13 หลัก',
    placeholder: 'เลขทะเบียน 13 หลัก',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'LengthInput',
    maxLength: 13,
    rule: [{ required: true, message: 'กรุณากรอกเลขทะเบียน 13 หลัก!' }],
  },
  {
    name: 'registerVat',
    label: 'จดทะเบียนภาษีมูลค่าเพิ่ม',
    placeholder: 'จดทะเบียนภาษีมูลค่าเพิ่ม',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SwitchFormField',
    rule: [
      {
        required: true,
        message: 'กรุณาเลือกว่าจดทะเบียนภาษีมูลค่าเพิ่มหรือไม่!',
      },
    ],
    checkedText: 'จด',
    unCheckedText: 'ไม่ได้จด',
  },

  {
    name: 'descriptionsTh',
    label: 'คำอธิบายธุรกิจ (ภาษาไทย)',
    placeholder: 'คำอธิบายธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextAreaFormField',
  },
  {
    name: 'descriptionsEn',
    label: 'คำอธิบายธุรกิจ (English)',
    placeholder: 'คำอธิบายธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextAreaFormField',
  },

  {
    name: 'openingDate',
    label: 'วันที่จดทะเบียน',
    placeholder: 'วันที่จดทะเบียน',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'DatePickerFormField',
  },
  {
    name: 'websiteUrl',
    label: 'เว็ปไซต์สำนักงาน',
    placeholder: 'เว็ปไซต์สำนักงาน',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  /*Setting Section*/

  {
    name: ['setting', 'defaultLanguage'],
    label: 'ภาษา',
    placeholder: 'ภาษา',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'TH', label: 'ภาษาไทย' },
      { value: 'EN', label: 'English' },
    ],
    defaultValue: 'TH',
    rule: [{ required: true, message: 'กรุณาเลือกภาษา!' }],
  },
  {
    name: ['setting', 'domainName'],
    label: 'ชื่อโดเมน',
    placeholder: 'ชื่อโดเมน ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกชื่อโดเมน!' }],
  },
  {
    name: ['setting', 'theme'],
    label: 'ธีมสี',
    placeholder: 'ธีมสี',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'light', label: 'สว่าง' },
      { value: 'dark', label: 'มืด' },
    ],
    defaultValue: 'light',
  },
  {
    name: ['setting', 'textDisplay'],
    label: 'ตัวอักษร',
    placeholder: 'ตัวอักษร',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'large', label: 'ขนาดใหญ่' },
      { value: 'normal', label: 'ปกติ' },
      { value: 'small', label: 'ขนาดเล็ก' },
    ],
    defaultValue: 'normal',
  },

  // {
  //   label: 'ข้อมูลที่อยู่',
  //   col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
  //   type: 'SectionLabelForm',
  // },
  // {
  //   name: ['address', 'city'],
  //   label: 'เมือง',
  //   placeholder: 'เมือง',
  //   col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
  //   type: 'TextboxFormField',
  //   rule: [{ required: true, message: 'กรุณากรอกเมือง!' }],
  // },
  // {
  //   name: ['address', 'province'],
  //   label: 'จังหวัด',
  //   placeholder: 'จังหวัด',
  //   col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
  //   type: 'TextboxFormField',
  //   rule: [{ required: true, message: 'กรุณากรอกจังหวัด!' }],
  // },
  // {
  //   name: ['address', 'postalCode'],
  //   label: 'รหัสไปรษณีย์',
  //   placeholder: 'รหัสไปรษณีย์',
  //   col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
  //   type: 'TextboxFormField',
  //   rule: [{ required: true, message: 'กรุณากรอกรหัสไปรษณีย์!' }],
  // },
  // { col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 } },
  // {
  //   name: ['address', 'roomNo'],
  //   label: 'เลขห้อง',
  //   placeholder: 'เลขห้อง',
  //   col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
  //   type: 'TextboxFormField',
  // },
  // {
  //   name: ['address', 'floorNo'],
  //   label: 'ชั้นที่อยู่',
  //   placeholder: 'ชั้นที่อยู่',
  //   col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
  //   type: 'TextboxFormField',
  // },
  // {
  //   name: ['address', 'village'],
  //   label: 'หมู่บ้าน',
  //   placeholder: 'หมู่บ้าน',
  //   col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
  //   type: 'TextboxFormField',
  // },
  // {
  //   name: ['address', 'villageNo'],
  //   label: 'เลขหมู่บ้าน',
  //   placeholder: 'เลขหมู่บ้าน',
  //   col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
  //   type: 'TextboxFormField',
  // },
  // {
  //   name: ['address', 'houseNo'],
  //   label: 'บ้านเลขที่',
  //   placeholder: 'บ้านเลขที่',
  //   col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
  //   type: 'TextboxFormField',
  // },
  // {
  //   name: ['address', 'alley'],
  //   label: 'ตรอก',
  //   placeholder: 'ตรอก',
  //   col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
  //   type: 'TextboxFormField',
  // },
  // {
  //   name: ['address', 'road'],
  //   label: 'ถนน',
  //   placeholder: 'ถนน',
  //   col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
  //   type: 'TextboxFormField',
  // },
  // {
  //   name: ['address', 'building'],
  //   label: 'สิ่งปลูกสร้าง',
  //   placeholder: 'สิ่งปลูกสร้าง',
  //   col: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
  //   type: 'TextboxFormField',
  // },

  // {
  //   name: ['address', 'nation'],
  //   label: 'ประเทศ',
  //   placeholder: 'ประเทศ',
  //   col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
  //   type: 'TextboxFormField',
  // },

  // {
  //   name: ['address', 'district'],
  //   label: 'เขต/อำเภอ',
  //   placeholder: 'เขต/อำเภอ',
  //   col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
  //   type: 'TextboxFormField',
  // },
  // {
  //   name: ['address', 'subDistrict'],
  //   label: 'แขวง/ตำบล',
  //   placeholder: 'แขวง/ตำบล',
  //   col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
  //   type: 'TextboxFormField',
  // },

  // {
  //   name: ['address', 'note'],
  //   label: 'โน็ต',
  //   placeholder: 'โน็ต',
  //   col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
  //   type: 'TextAreaFormField',
  // },
  {
    label: 'ข้อมูลช่องทางการติดต่อ',
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'SectionLabelForm',
  },

  {
    name: 'contactPhone',
    label: 'เบอร์โทรศัพท์ติดต่อ',
    placeholder: 'เบอร์โทรศัพท์ติดต่อ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'PhoneInput',
    rule: [{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์ติดต่อ!' }],
  },
  {
    name: 'contactEmail',
    label: 'อีเมลติดต่อ',
    placeholder: 'อีเมลติดต่อ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกเบอร์อีเมลติดต่อ!' }],
  },
  {
    name: 'contactWebsite',
    label: 'เว็บไซต์ติดต่อ',
    placeholder: 'เว็บไซต์ติดต่อ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    name: 'businessEmail',
    label: 'อีเมลสำนักงาน',
    placeholder: 'อีเมลสำนักงาน',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  {
    name: 'contactFacebook',
    label: 'Facebook',
    placeholder: 'Facebook',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    name: 'contactLine',
    label: 'Line ID',
    placeholder: 'line Id',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  {
    name: 'contactWhatsapp',
    label: 'WhatsApp',
    placeholder: 'WhatsApp',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    name: 'contactNote',
    label: 'ข้อมูลการติดต่อ',
    placeholder: 'ข้อมูลการติดต่อ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    label: 'ข้อมูลที่อยู่',
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'SectionLabelForm',
  },
];

export const renderSettingData = [
  //FIXME:add upload logo url

  {
    label: 'ข้อมูลองค์กร',
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'SectionLabelForm',
  },
  {
    label: 'รูปภาพองค์กร',
    col: { xs: 24, sm: 24, md: 6, lg: 6, xl: 6 },
    type: 'UploadFile',
  },
  {
    name: 'active',
    label: 'ปิดองค์กร',
    col: { xs: 24, sm: 24, md: 18, lg: 18, xl: 18 },
    type: 'ActiveCard',
    title: 'ปิดองค์กร',
    description:
      'ใช้สำหรับการปิดหรือยุติการทำงานขององค์กรในระบบหรือเว็บไซต์ ซึ่งอาจรวมถึงการปิดการใช้งานบัญชีองค์กร',
    rule: [{ required: true, message: 'กรุณาเลือกเปิดปิดองค์กร!' }],
  },
  {
    name: 'status',
    label: 'สถานะธุรกิจ',
    placeholder: 'สถานะธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'NewlyRegistered', label: 'ลูกค้าที่เพิ่งลงทะเบียนใหม่ในระบบ' },
      { value: 'ActiveUser', label: 'ลูกค้าที่ใช้งานอย่างต่อเนื่อง' },
      { value: 'LoyalCustomer', label: 'ลูกค้าที่มีความภักดีต่อระบบ' },
      { value: 'AtRisk', label: 'ลูกค้าที่อาจจะเสี่ยงต่อการหยุดใช้งาน' },
      { value: 'Churned', label: 'ลูกค้าที่ได้หยุดใช้บริการหรือยกเลิกบัญชี' },
    ],
    defaultValue: 'NewlyRegistered',
    rule: [{ required: true, message: 'กรุณาเลือกสถานะธุรกิจ!' }],
  },

  {
    name: 'fromType',
    label: 'ประเภทธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'RadioFormField',
    options: [
      { value: 'OrdinaryPerson', label: 'บุคคลธรรมดา' },
      { value: 'JuristicPerson', label: 'นิติบุคคล' },
    ],
    defaultValue: 'OrdinaryPerson',
    rule: [{ required: true, message: 'กรุณาเลือกประเภทธุรกิจ!' }],
  },
  {
    name: 'type',
    label: 'รูปแบบธุรกิจ',
    placeholder: 'รูปแบบธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'Taxpayer', label: 'บุคคลธรรมดา' },
      { value: 'OrdinaryPartnership', label: 'ห้างหุ้นส่วนสามัญ' },
      { value: 'Shop', label: 'ร้านค้า' },
      { value: 'BodyOfPerson', label: 'คณะบุคคล' },
      { value: 'CompanyLimited', label: 'บริษัทจำกัด' },
      { value: 'PublicCompanyLimited', label: 'บริษัทมหาชนจำกัด' },
      { value: 'LimitedPartnership', label: 'ห้างหุ้นส่วนจำกัด' },
      { value: 'Foundation', label: 'มูลนิธิ' },
      { value: 'Association', label: 'สมาคม' },
      { value: 'JointVenture', label: 'กิจการร่วมค้า' },
      { value: 'Others', label: 'อื่นๆ' },
    ],
    rule: [{ required: true, message: 'กรุณาเลือกรูปแบบธุรกิจ!' }],
  },
  {
    name: 'nameTh',
    label: 'ชื่อกิจการ (ภาษาไทย)',
    placeholder: 'ชื่อกิจการ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกชื่อกิจการ (ภาษาไทย)!' }],
    isName: true,
  },
  {
    name: 'nameEn',
    label: 'ชื่อกิจการ (English)',
    placeholder: 'ชื่อกิจการ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกชื่อกิจการ (English)!' }],
    isName: true,
  },
  {
    name: 'registerVat',
    label: 'จดทะเบียนภาษีมูลค่าเพิ่ม',
    placeholder: 'จดทะเบียนภาษีมูลค่าเพิ่ม',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SwitchFormField',
    rule: [
      {
        required: true,
        message: 'กรุณาเลือกว่าจดทะเบียนภาษีมูลค่าเพิ่มหรือไม่!',
      },
    ],
    checkedText: 'จด',
    unCheckedText: 'ไม่ได้จด',
  },
  {
    name: 'taxId',
    label: 'เลขทะเบียน 13 หลัก',
    placeholder: 'เลขทะเบียน 13 หลัก',
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'LengthInput',
    maxLength: 13,
    rule: [{ required: true, message: 'กรุณากรอกเลขทะเบียน 13 หลัก!' }],
  },

  {
    name: 'descriptionsTh',
    label: 'คำอธิบายธุรกิจ (ภาษาไทย)',
    placeholder: 'คำอธิบายธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextAreaFormField',
  },
  {
    name: 'descriptionsEn',
    label: 'คำอธิบายธุรกิจ (English)',
    placeholder: 'คำอธิบายธุรกิจ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextAreaFormField',
  },

  {
    name: 'openingDate',
    label: 'วันที่จดทะเบียน',
    placeholder: 'วันที่จดทะเบียน',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'DatePickerFormField',
  },
  {
    name: 'websiteUrl',
    label: 'เว็ปไซต์สำนักงาน',
    placeholder: 'เว็ปไซต์สำนักงาน',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  {
    label: 'ข้อมูลช่องทางการติดต่อ',
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'SectionLabelForm',
  },

  {
    name: 'contactPhone',
    label: 'เบอร์โทรศัพท์ติดต่อ',
    placeholder: 'เบอร์โทรศัพท์ติดต่อ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'PhoneInput',
    rule: [{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์ติดต่อ!' }],
  },
  {
    name: 'contactEmail',
    label: 'อีเมลติดต่อ',
    placeholder: 'อีเมลติดต่อ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกเบอร์อีเมลติดต่อ!' }],
  },
  {
    name: 'contactWebsite',
    label: 'เว็บไซต์ติดต่อ',
    placeholder: 'เว็บไซต์ติดต่อ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    name: 'businessEmail',
    label: 'อีเมลสำนักงาน',
    placeholder: 'อีเมลสำนักงาน',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  {
    name: 'contactFacebook',
    label: 'Facebook',
    placeholder: 'Facebook',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    name: 'contactLine',
    label: 'Line ID',
    placeholder: 'line Id',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },

  {
    name: 'contactWhatsapp',
    label: 'WhatsApp',
    placeholder: 'WhatsApp',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
  {
    name: 'contactNote',
    label: 'ข้อมูลการติดต่อ',
    placeholder: 'ข้อมูลการติดต่อ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
  },
];

export const renderSystemSetting = [
  {
    label: 'ตั้งค่าระบบ',
    col: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    type: 'SectionLabelForm',
  },
  {
    name: 'defaultLanguage',
    label: 'ภาษา',
    placeholder: 'ภาษา',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'TH', label: 'ภาษาไทย' },
      { value: 'EN', label: 'English' },
    ],
    defaultValue: 'TH',
    rule: [{ required: true, message: 'กรุณาเลือกภาษา!' }],
  },
  {
    name: 'domainName',
    label: 'ชื่อโดเมน',
    placeholder: 'ชื่อโดเมน ',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'TextboxFormField',
    rule: [{ required: true, message: 'กรุณากรอกชื่อโดเมน!' }],
  },
  {
    name: 'theme',
    label: 'ธีมสี',
    placeholder: 'ธีมสี',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'light', label: 'สว่าง' },
      { value: 'dark', label: 'มืด' },
    ],
    defaultValue: 'light',
  },
  {
    name: 'textDisplay',
    label: 'ตัวอักษร',
    placeholder: 'ตัวอักษร',
    col: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
    type: 'SelectFormField',
    options: [
      { value: 'large', label: 'ขนาดใหญ่' },
      { value: 'normal', label: 'ปกติ' },
      { value: 'small', label: 'ขนาดเล็ก' },
    ],
    defaultValue: 'normal',
  },
];