

const UPLOAD_URL = {
  CANDIDATE_RESUME_UPLOAD_URL: '/file/candidate/resume/upload',
  CANDIDATE_PHOTO_UPLOAD_URL: '/file/candidate/photo/upload',
  CANDIDATE_IDPROOF_UPLOAD_URL: '/file/candidate/idproof/upload',
  EMPLOYER_LOGO_UPLOAD_URL: '/file/employer/logo/upload',
  CANDIDATE_ICARDPROOF_UPLOAD_URL: '/file/candidate/icard/upload',
};

export const API_URL = {
  LOGIN: '/api/v1/login',
  JOB_COUNT: '/search/jobcount',
  CANDIDATE_COUNT: '/search/candidatecount',
  CANDIDATE_REGISTER: '/candidate',
  EMPLOYER_PROFILE: '/employer/self/profile',
  DELETE_FILE: '/file/delete?file=',
  PHOTO_PRE: '/api/v1/file/download?file=',
  RESUME_PRE: '/api/v1/file/candidate/resume/download?file=',
  ID_PROOF_PRE: '/api/v1/file/candidate/idproof/download?file=',
  ICARD_PROOF_PRE: '/api/v1/file/candidate/icard/download?file=',
  CANDIDATE_SELF_PROFILE: '/candidate/self/profile',
  ASSESSMENT_START: '/assessment/start',
  AVAILABLE_ASSESSMENT: '/common/assessments',
  COMPLETE_ASSESSMENT: '/candidate/assessments',
  GUIDELINE: '/assessment/guideline',
  CREDENTIAL: '/credential',
  PRE_ASSESSMENT_CHECK: '/candidate/preassessmentcheck',
  POINTS: '/txn/points',
  HISTORY: '/txn/history',
  COUPON: '/txn/coupon/apply',
  PAYMENT_UPDATE: '/txn/payment/update',
  FEEDBACK: '/common/feedback',
  INVOICE_DWLD: '/api/v1/txn/invoice/download?orderid=',
  SETTINGS_API: '/common/settings',
  UNIVERSITY_EMAILS_API: '/common/settings/updateemailids',
  DELETE_ACCOUNT_API: '/delete/account',
  LOGOUT: '/logout',
  SEND_REPORT: '/common/report',
  ACCOUNT_CHECK: '/account/check',
  LAST_ASSESSMENT: '/candidate/lastassessment',
  REFERRAL_LINK: '/referrallink',
  PROMOTION_APPLY_LINK: '/applyoffer/',
  OFFERS_LINK: '/offers',
  NOTIFICATION_TURN: '/notification/turn/false?type=',
  NOTIFICATION_COUNT: '/notification/count',
  GET_BANNERS: '/notification/banner',
  GET_NOTIFICATIONS: '/notification/list',
  BANNER_READ: '/notification/markread',
  SWITCH_GLOBAL_NOTIFICATION: '/notification/global/turn',
  SWITCH_LOCAL_NOTIFICATION: '/notification/turn',
  NOTIFICATION_SETTINGS_API: '/notification/settings',
  GENERATE_SITE_MAP: `/admin/gensitemap`,
  UPDATE_JOB_CANDIDATE_SKILLS: `/admin/updateVerifiedSkills`,
  GENERATE_NON_VERIFIED_SKILLS: `/admin/genNonVerifiedSkills`,
  GENERATE_NON_VERIFIED_COLLEGES: `/admin/genNonVerifiedColleges`,
  GENERATE_NON_VERIFIED_COMPANIES: `/admin/genNonVerifiedCompanies`,
  UPDATE_DOMAIN: `/admin/updateDomain`,
  CASHBACK_DISBURSAL: `/admin/disburse`,
  ADMIN_NOTIFICATION: `/notification/raise`,
  NOTIFICATION_UPDATE: '/notification/update/template',
  NOTIFICATION_CREATE: '/notification/create/template',
  UPLOAD_COLLEGES: `/admin/uploadColleges`,
  RELOAD_CONFIGURATION: `/admin/configuration/update`,
  UPLOAD_QUESTIONS: `/admin/uploadQuestions`,
  UPDATE_VERIFIED_COLLEGES: `/admin/updateVerifiedColleges`,
  UPDATE_VERIFIED_COMPANIES: `/admin/updateVerifiedCompanies`,
  UPLOAD_WL_DOMAINS: `/admin/uploadWLDomains`,
  UPLOAD_BL_DOMAINS: `/admin/uploadBLDomains`,
  EMPLOYER_ACCOUNT_UPDATE: `/admin/update/employer`,
  WARRANTY_UPDATE: `/admin/warranty/action`,
  UNIVERSITY_REGISTER: `/register/college`,
  UPDATE_SKILL: '/admin/updateVerifiedSkills',
  UPLOAD_INDUSTRIES: '/admin/uploadIndustries',
  UPDATE_VERIFIED_INDUSTRIES: '/admin/updateVerifiedIndustries',
  GENERATE_NON_VERIFIED_INDUSTRIES: '/admin/generateNonVerifiedIndustries',
  UPDATE_INDUSTRY: '/admin/updateIndustry',
};

export const IMAGE_URL = {
  TICK: '/images/tick.svg',
  REMOVE: '/images/remove.svg',
  RESULT_NOT_FOUND: '/images/resultNotFound.png',
  OTHER_ROUTES: '/images/otherRoutes.svg',
  CONGRATULATIONS: '/images/congratulations.png',
  DISABLED_REATTEMPT: '/images/disabledReattempt.svg',
  LESS_RATING: '/images/lessRating.png',
  REATTEMPT: '/images/reattempt.svg',
  FILTER: '/images/filterLogo.svg',
  ALIGNMYCAREER: '/images/alignmycareer.svg',
};

export const getReportStatUrl = (stat) => `/report/${stat}/candidatestat`;

export const updateSwitch = (checked) =>
  `/candidate/self/autoapply?apply=${checked}`;

export const validateAssessment = (techId) =>
  `/assessment/validate?techId=${techId}`;

export const getAssessmentHistory = (techId) =>
  `/candidate/${techId}/assessments`;

export const getCompleteAssessment = (state) =>
  `/candidate/assessments?state=${state}`;

export const getPostJobUrl = (currentJobId, jobPostMode) =>
  `/employer/job/${currentJobId}/action/${jobPostMode}`;

export const getEmployerJobData = (jobId) => `/employer/job/${jobId}`;


export const getCouponUrl = (couponCode) =>
  `${API_URL.COUPON}?code=${couponCode}`;

export const getAvailableAssessment = (type, category) =>
  `${API_URL.AVAILABLE_ASSESSMENT}?type=${type}&category=${category}`;

export const getAccept = (assessmentId, isVisible) =>
  `/candidate/assessment/${assessmentId}/accept?accept=${isVisible}`;

export const getPreUnlockCheck = (candidateId) =>
  `/employer/candidate/${candidateId}/preunlockcheck`;

export const getPreCandidateCheck = (candidateId, state) =>
  `/employer/candidate/${candidateId}/precheck/${state}`;

export const getAssessmentStart = (techId) =>
  `${API_URL.ASSESSMENT_START}?techId=${techId}`;

export const getGuideline = (techId) => `${API_URL.GUIDELINE}?techId=${techId}`;

export const getTerminateAssessment = (assessmentId) =>
  `/assessment/${assessmentId}/terminate`;

export const getAssessmentSubmit = (assessmentId) =>
  `/assessment/${assessmentId}/submit`;

export const getFlipQuestion = (assessmentId) =>
  `/assessment/${assessmentId}/flip`;

export const getQuestions = (assessmentId, requestQuesNo) =>
  `/assessment/${assessmentId}/ques/${requestQuesNo}`;

export const getTxnTokenUrl = (product, amount) =>
  `txn/token/generate?product=${product}&amount=${amount}`;

// export const getPaytmScriptUrl = (mid) =>
//   `https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/${mid}.js`;

export const getGoogleMapScriptUrl = (KEY) =>
  `https://maps.googleapis.com/maps/api/js?key=${KEY}&libraries=places`;

export const sendAnomalyImage = (assessmentId) =>
  `/assessment/${assessmentId}/proctor`;

export const updateTechnologies = (techId) =>
  `/admin/technology/update/${techId}`;
