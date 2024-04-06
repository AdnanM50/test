import { data } from "autoprefixer";
import { del, get, patch, post, postForm, patchForm, put } from "./api";

export const sendOtp = (data) => post("/user/send-otp", data);
export const postRegister = (data) => post("/user/registration", data);
export const getprofile = (data) => get("/user", data);
export const postLogin = (data) => post("/user/login", data);
export const postVerifyOtp = (data) => post("/user/verify-otp", data);
export const postResetPassword = (data) => post("/user/reset-password", data);
export const postChangePassword = (data) => post("/user/password", data);

export const fetchAllCountry = (data) => get("/countries", data);
export const fetchUser = (data) => get("/user", data);
export const fetchAllUser = (data) => get("/user/list", data);
export const fetchUserDetails = (data) => get("/user/details", data);
export const updateUser = (data) => postForm("/user", data);
export const updatePassword = (data) => post("/user/password", data);
export const fetchAllNotifications = (data) => get("/notification/list", data);
export const postReadNotification = (data) => post("/notification/read", data);
export const postReadAllNotification = (data) =>
  post("/notification/read/all", data);

export const fetchAccounts = (data) => get("/account/list", data);
export const fetchAccount = (data) => get("/account/:uid", data);
export const fetchAccountElements = (data) => get("/account/elements", data);
export const postAccount = (data) => post("/account", data);
export const patchAccount = (data) => patch("/account/:uid", data);
export const delAccount = (data) => del("/account/:uid", data);

// translations
export const fetchTranslations = (data) => get("/language/translations", data);
export const fetchPublicLanguages = (data) => get("/languages", data);

//category
export const fetchCategories = (data) => get("/product/category/list", data);
export const postCategory = (data) => postForm("/product/category", data);
export const delCategory = (data) => del("/product/category", data);
//newsletter
export const fetchNewsletter = (data) => get("/newsletter/list", data);
export const delNewsLetter = (data) => del("/newsletter", data);
export const postNewsLetter = (data) => post("/newsletter", data);
//settings
export const fetchAdminSettings = (data) => get("/settings", data);
export const patchAdminSettings = (data) => postForm("/settings", data);

// languages 
export const fetchLanguages = (data) => get('/language/list', data);
export const fetchLanguage = (data) => get('/language', data);
export const postLanguage = (data) => post('/language', data);
export const delLanguage = (data) => del('/language', data);

//contact us
export const postContactUs = (data) => post("/contact", data);
export const fetchContact = (data) => get("/contact/list", data);
export const fetchContactDetail = (data) => get("/contact", data);
export const delContact = (data) => del("/contact", data);
export const replyContact = (data) => post("/contact/reply", data);
//services
export const fetchAllService = (data) => get("/service/list", data);
export const fetchServiceDetails = (data) => get("/service", data);
export const patchService = (data) => postForm("/service", data);
export const postService = (data) => postForm("/service", data);
export const delService = (data) => del("/service", data);
//fa1
export const fetchAllFaq = (data) => get("faq/list", data);
export const postFaq = (data) => post("/faq", data);
export const delFaq = (data) => del("/faq", data);
//All Gallery
export const fetchAllGallery = (data) => get("/gallery", data);
export const postGallery = (data) => postForm("/gallery", data);
export const delGallery = (data) => del("/gallery", data);
//contact
export const postContact = (data) => post("/contact", data);
//Products
export const fetchAllProduct = (data) => get("/product/list", data);
export const fetchFeaturedProducts = (data) => get("/product/featured", data)
export const getSingleProduct = (data) => get("/product", data);
export const delProduct = (data) => del("/product", data);
export const postProduct = (data) => postForm("/product", data);
//review
export const getPreview = (data) => get("/product/review", data);
export const delPreview = (data) => del("/product/review", data);
export const postReview = (data) => post("product/review", data);
//trainer
export const fetchTrainer = (data) => get("/user/trainers", data);
export const getTrainerDetails = (data) => get("/user/trainer", data);
export const fetchAllTrainer = (data) => get('/user/trainers/without-paginate', data);

// admin subscription
export const fetchSubscription = (data) => get('/subscription/list', data);
export const fetchSubscriptionDetails = (data) => get('/subscription', data);
export const postSubscription = (data) => post('/subscription', data);
export const delSubscription = (data) => del('/subscription', data);


//blog
export const fetchAllBlogs = (data) => get("/blog/list", data);
export const fetchBlogCategory = (data) => get("/blog/category/list", data);
export const postBlogCategory = (data) => post("/blog/category", data);
export const delBlogCategory = (data) => del("/blog/category", data);
export const fetchBlogTags = (data) => get("/blog/tag/list", data);
export const postBlog = (data) => postForm("/blog", data);
export const delBlog = (data) => del("/blog", data);
export const fetchSingleBlog = (data) => get("/blog/details", data);
export const postBlogTags = (data) => post("/blog/tag", data);
export const delTags = (data) => del("/blog/tag", data);
export const fetchLatestBlog = (data) => get("/blog/latest", data);

//portfolio
export const fetchAllPortfolio = (data) => get("/portfolio/list", data);
export const delPortfolio = (data) => del("/portfolio", data);
export const postPortfolio = (data) => postForm("/portfolio", data);
export const portfolioTags = (data) => get("/portfolio/tags", data);
export const fetchSinglePortfolio = (data) => get("/portfolio", data);

export const postBlogComment = (data) => post("/blog/comment", data);
export const fetchBlogComments = (data) => get("/blog/comment", data);
export const postCommentReply = (data) => post("/blog/comment/reply", data);

export const fetchFeedBack = (data) => get("/feedback/list", data);
export const postFeedback = (data) => postForm("/feedback", data);
export const delFeedback = (data) => del("/feedback", data);

export const fetchClasses = (data) => get("/regular-class/list", data);
export const fetchClassDetails = (data) => get("/regular-class", data);
export const postRegularClass = (data) => postForm("/regular-class", data);
export const delRegularClass = (data) => del("/regular-class", data);

export const fetchRecordOfUser = (data) => get("/record/list", data);
export const postRecord = (data) => postForm("/record", data);
export const delRecord = (data) => del("/record", data);

//files
export const postSingleFile = (data) =>
  postForm("/file/single-image-upload", data);

// schedule
export const fetchAllSchedule = (data) => get("/schedule", data);

export const fetchAllDashboardSchedule = (data) => get("/schedule/all", data);
export const delSchedule = (data) => del("/schedule", data);

export const fetchAvailableSlot = (data) => get("/schedule/available-time-slots", data);
export const postSchedule = (data) => postForm("/schedule", data);
export const getScheduleEvents = (data) => get("/schedule/events", data);


export const postPage = (data) => postForm("/page", data);
export const fetchSinglePage = (data) => get("/page", data);

export const fetchSiteSettings = (data) => get('/settings', data)

export const appointAsTrainer = (data) => post('/user/appoint-trainer', data)
export const removeFromTrainer = (data) => post('/user/remove-trainer', data)

//cart 
export const fetchUserCart = (data) => get('/cart', data)
export const postUserCart = (data) => post('/cart', data)
export const delUserCartAll = (data) => del('/cart/clear', data)
export const delUserCart = (data) => del('/cart', data)

export const fetchSubscriptionList = (data) => get('/subscription/all', data)

export const postUserSubscription = (data) => post('/subscription/create-stripe-subscription', data)

export const fetchUserOrders = (data) => get('/order/list', data)
export const fetchUserOrder = (data) => get('/order', data)

export const postOrder = (data) => post('/order/create', data)

export const fetchAdminOrderList = (data) => get('/order/admin-list', data)

export const fetchDashboardData = (data) => get('/dashboard', data)

//email settings 
export const fetchEmailSettings = (data) => get("/mail-credential", data)
export const postEmailSettings = (data) => post("/mail-credential", data)

// admin payment methods 
export const fetchPaymentMethods = (data) => get("/payment/method/list", data);
export const fetchPaymentMethod = (data) => get("/payment/method", data);
export const postPaymentMethod = (data) => post("/payment/method", data);
export const delPaymentMethod = (data) => del("/payment/method", data);
