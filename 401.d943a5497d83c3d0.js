"use strict";(self.webpackChunkvelzon=self.webpackChunkvelzon||[]).push([[401],{69401:(L,F,d)=>{d.r(F),d.d(F,{SignupModule:()=>x});var p=d(60177),c=d(22960),s=d(89417),u=d(51188),e=d(54438);const v=i=>({"is-invalid":i}),h=(i,m)=>({"mdi-eye-off-outline":i,"mdi-eye-outline":m}),f=i=>({"is-invalid":i}),w=(i,m)=>({"mdi-eye-off-outline":i,"mdi-eye-outline":m});function k(i,m){1&i&&(e.j41(0,"div",62)(1,"div",63)(2,"p",64),e.EFF(3,'" Great! Clean code, clean design, easy for customization. Thanks very much! "'),e.k0s()()())}function j(i,m){1&i&&(e.j41(0,"div",62)(1,"div",63)(2,"p",64),e.EFF(3,'" The theme is really great with an amazing customer support."'),e.k0s()()())}function E(i,m){1&i&&(e.j41(0,"div",62)(1,"div",63)(2,"p",64),e.EFF(3,'" Great! Clean code, clean design, easy for customization. Thanks very much! "'),e.k0s()()())}const C=[{path:"basic",component:(()=>{class i{constructor(n){this.formBuilder=n,this.submitted=!1,this.year=(new Date).getFullYear()}ngOnInit(){this.SignupForm=this.formBuilder.group({email:["",[s.k0.required]],name:["",[s.k0.required]],password:["",s.k0.required]});var n=document.getElementById("password-input"),a=document.getElementById("pass-lower"),t=document.getElementById("pass-upper"),r=document.getElementById("pass-number"),l=document.getElementById("pass-length");n.onfocus=function(){document.getElementById("password-contain").style.display="block"},n.onblur=function(){document.getElementById("password-contain").style.display="none"},n.onkeyup=function(){n.value.match(/[a-z]/g)?(a?.classList.remove("invalid"),a?.classList.add("valid")):(a?.classList.remove("valid"),a?.classList.add("invalid")),n.value.match(/[A-Z]/g)?(t?.classList.remove("invalid"),t?.classList.add("valid")):(t?.classList.remove("valid"),t?.classList.add("invalid")),n.value.match(/[0-9]/g)?(r?.classList.remove("invalid"),r?.classList.add("valid")):(r?.classList.remove("valid"),r?.classList.add("invalid")),n.value.length>=8?(l?.classList.remove("invalid"),l?.classList.add("valid")):(l?.classList.remove("valid"),l?.classList.add("invalid"))}}get f(){return this.SignupForm.controls}onSubmit(){this.submitted=!0}toggleFieldTextType(){this.fieldTextType=!this.fieldTextType}static{this.\u0275fac=function(a){return new(a||i)(e.rXU(s.ze))}}static{this.\u0275cmp=e.VBU({type:i,selectors:[["app-basic"]],decls:111,vars:16,consts:[[1,"auth-page-wrapper","pt-5"],["id","auth-particles",1,"auth-one-bg-position","auth-one-bg"],[1,"bg-overlay"],[1,"shape"],["xmlns","http://www.w3.org/2000/svg","version","1.1",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 0 1440 120"],["d","M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"],[1,"auth-page-content"],[1,"container"],[1,"row"],[1,"col-lg-12"],[1,"text-center","mt-sm-5","mb-4","text-white-50"],["routerLink","",1,"d-inline-block","auth-logo"],["src","assets/images/logo-light.png","alt","","height","20"],[1,"mt-3","fs-15","fw-medium"],[1,"row","justify-content-center"],[1,"col-md-8","col-lg-6","col-xl-5"],[1,"card","mt-4"],[1,"card-body","p-4"],[1,"text-center","mt-2"],[1,"text-primary"],[1,"text-muted"],[1,"p-2","mt-4"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","useremail",1,"form-label"],[1,"text-danger"],["type","email","id","useremail","placeholder","Enter email address","required","","formControlName","email",1,"form-control",3,"ngClass"],[1,"invalid-feedback"],["for","username",1,"form-label"],["type","text","id","username","placeholder","Enter username","required","","formControlName","name",1,"form-control",3,"ngClass"],["for","userpassword",1,"form-label"],[1,"position-relative","auth-pass-inputgroup"],["placeholder","Enter password","id","password-input","aria-describedby","passwordInput","pattern","(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}","required","","formControlName","password",1,"form-control","pe-5","password-input",3,"type","ngClass"],["type","button","id","password-addon",1,"btn","btn-link","position-absolute","end-0","top-0","text-decoration-none","text-muted","password-addon"],[1,"ri-eye-fill","align-middle",3,"click","ngClass"],[1,"mb-4"],[1,"mb-0","fs-12","text-muted","fst-italic"],["href","javascript:void(0);",1,"text-primary","text-decoration-underline","fst-normal","fw-medium"],["id","password-contain",1,"p-3","bg-light","mb-2","rounded"],[1,"fs-13"],["id","pass-length",1,"invalid","fs-12","mb-2"],["id","pass-lower",1,"invalid","fs-12","mb-2"],["id","pass-upper",1,"invalid","fs-12","mb-2"],["id","pass-number",1,"invalid","fs-12","mb-0"],[1,"mt-4"],["type","submit",1,"btn","btn-success","w-100"],[1,"mt-4","text-center"],[1,"signin-other-title"],[1,"fs-13","mb-4","title","text-muted"],[1,"d-flex","gap-2","justify-content-center"],["type","button",1,"btn","btn-primary","btn-icon","waves-effect","waves-light"],[1,"ri-facebook-fill","fs-16"],["type","button",1,"btn","btn-danger","btn-icon","waves-effect","waves-light"],[1,"ri-google-fill","fs-16"],["type","button",1,"btn","btn-dark","btn-icon","waves-effect","waves-light"],[1,"ri-github-fill","fs-16"],["type","button",1,"btn","btn-info","btn-icon","waves-effect","waves-light"],[1,"ri-twitter-fill","fs-16"],[1,"mb-0"],["routerLink","/auth/signin/basic",1,"fw-semibold","text-primary","text-decoration-underline"],[1,"footer"],[1,"text-center"],[1,"mb-0","text-muted"],[1,"mdi","mdi-heart","text-danger"]],template:function(a,t){1&a&&(e.j41(0,"div",0)(1,"div",1),e.nrm(2,"div",2),e.j41(3,"div",3),e.qSk(),e.j41(4,"svg",4),e.nrm(5,"path",5),e.k0s()()(),e.joV(),e.j41(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"div")(12,"a",11),e.nrm(13,"img",12),e.k0s()(),e.j41(14,"p",13),e.EFF(15,"Premium Admin & Dashboard Template"),e.k0s()()()(),e.j41(16,"div",14)(17,"div",15)(18,"div",16)(19,"div",17)(20,"div",18)(21,"h5",19),e.EFF(22,"Create New Account"),e.k0s(),e.j41(23,"p",20),e.EFF(24,"Get your free velzon account now"),e.k0s()(),e.j41(25,"div",21)(26,"form",22),e.bIt("ngSubmit",function(){return t.onSubmit()}),e.j41(27,"div",23)(28,"label",24),e.EFF(29,"Email "),e.j41(30,"span",25),e.EFF(31,"*"),e.k0s()(),e.nrm(32,"input",26),e.j41(33,"div",27),e.EFF(34," Please enter email "),e.k0s()(),e.j41(35,"div",23)(36,"label",28),e.EFF(37,"Username "),e.j41(38,"span",25),e.EFF(39,"*"),e.k0s()(),e.nrm(40,"input",29),e.j41(41,"div",27),e.EFF(42," Please enter username "),e.k0s()(),e.j41(43,"div",23)(44,"label",30),e.EFF(45,"Password "),e.j41(46,"span",25),e.EFF(47,"*"),e.k0s()(),e.j41(48,"div",31),e.nrm(49,"input",32),e.j41(50,"button",33)(51,"i",34),e.bIt("click",function(){return t.toggleFieldTextType()}),e.k0s()(),e.j41(52,"div",27),e.EFF(53," Please enter password "),e.k0s()()(),e.j41(54,"div",35)(55,"p",36),e.EFF(56,"By registering you agree to the Velzon "),e.j41(57,"a",37),e.EFF(58,"Terms of Use"),e.k0s()()(),e.j41(59,"div",38)(60,"h5",39),e.EFF(61,"Password must contain:"),e.k0s(),e.j41(62,"p",40),e.EFF(63,"Minimum "),e.j41(64,"b"),e.EFF(65,"8 characters"),e.k0s()(),e.j41(66,"p",41),e.EFF(67,"At "),e.j41(68,"b"),e.EFF(69,"lowercase"),e.k0s(),e.EFF(70," letter (a-z)"),e.k0s(),e.j41(71,"p",42),e.EFF(72,"At least "),e.j41(73,"b"),e.EFF(74,"uppercase"),e.k0s(),e.EFF(75," letter (A-Z)"),e.k0s(),e.j41(76,"p",43),e.EFF(77,"A least "),e.j41(78,"b"),e.EFF(79,"number"),e.k0s(),e.EFF(80," (0-9)"),e.k0s()(),e.j41(81,"div",44)(82,"button",45),e.EFF(83,"Sign Up"),e.k0s()(),e.j41(84,"div",46)(85,"div",47)(86,"h5",48),e.EFF(87,"Create account with"),e.k0s()(),e.j41(88,"div",49)(89,"button",50),e.nrm(90,"i",51),e.k0s(),e.j41(91,"button",52),e.nrm(92,"i",53),e.k0s(),e.j41(93,"button",54),e.nrm(94,"i",55),e.k0s(),e.j41(95,"button",56),e.nrm(96,"i",57),e.k0s()()()()()()(),e.j41(97,"div",46)(98,"p",58),e.EFF(99,"Already have an account ? "),e.j41(100,"a",59),e.EFF(101," Signin "),e.k0s()()()()()()(),e.j41(102,"footer",60)(103,"div",7)(104,"div",8)(105,"div",9)(106,"div",61)(107,"p",62),e.EFF(108),e.nrm(109,"i",63),e.EFF(110," by Themesbrand"),e.k0s()()()()()()()),2&a&&(e.R7$(26),e.Y8G("formGroup",t.SignupForm),e.R7$(6),e.Y8G("ngClass",e.eq3(7,v,t.submitted&&t.f.email.errors)),e.R7$(8),e.Y8G("ngClass",e.eq3(9,v,t.submitted&&t.f.name.errors)),e.R7$(9),e.Y8G("type",t.fieldTextType?"text":"password")("ngClass",e.eq3(11,v,t.submitted&&t.f.password.errors)),e.R7$(2),e.Y8G("ngClass",e.l_i(13,h,!t.fieldTextType,t.fieldTextType)),e.R7$(57),e.SpI("\xa9 ",t.year," Velzon. Crafted with "))},dependencies:[p.YU,s.qT,s.me,s.BC,s.cb,s.YS,s.R_,s.j4,s.JD,u.Wk]})}}return i})()},{path:"cover",component:(()=>{class i{constructor(n){this.formBuilder=n,this.submitted=!1,this.year=(new Date).getFullYear()}ngOnInit(){this.SignupForm=this.formBuilder.group({email:["",[s.k0.required]],name:["",[s.k0.required]],password:["",s.k0.required]});var n=document.getElementById("password-input"),a=document.getElementById("pass-lower"),t=document.getElementById("pass-upper"),r=document.getElementById("pass-number"),l=document.getElementById("pass-length");n.onfocus=function(){document.getElementById("password-contain").style.display="block"},n.onblur=function(){document.getElementById("password-contain").style.display="none"},n.onkeyup=function(){n.value.match(/[a-z]/g)?(a?.classList.remove("invalid"),a?.classList.add("valid")):(a?.classList.remove("valid"),a?.classList.add("invalid")),n.value.match(/[A-Z]/g)?(t?.classList.remove("invalid"),t?.classList.add("valid")):(t?.classList.remove("valid"),t?.classList.add("invalid")),n.value.match(/[0-9]/g)?(r?.classList.remove("invalid"),r?.classList.add("valid")):(r?.classList.remove("valid"),r?.classList.add("invalid")),n.value.length>=8?(l?.classList.remove("invalid"),l?.classList.add("valid")):(l?.classList.remove("valid"),l?.classList.add("invalid"))}}get f(){return this.SignupForm.controls}onSubmit(){this.submitted=!0}toggleFieldTextType(){this.fieldTextType=!this.fieldTextType}static{this.\u0275fac=function(a){return new(a||i)(e.rXU(s.ze))}}static{this.\u0275cmp=e.VBU({type:i,selectors:[["app-cover"]],decls:115,vars:17,consts:[[1,"auth-page-wrapper","auth-bg-cover","py-5","d-flex","justify-content-center","align-items-center","min-vh-100"],[1,"bg-overlay"],[1,"auth-page-content","overflow-hidden","pt-lg-5"],[1,"container"],[1,"row"],[1,"col-lg-12"],[1,"card","overflow-hidden","m-0"],[1,"row","justify-content-center","g-0"],[1,"col-lg-6"],[1,"p-lg-5","p-4","auth-one-bg","h-100"],[1,"position-relative","h-100","d-flex","flex-column"],[1,"mb-4"],["routerLink","",1,"d-block"],["src","assets/images/logo-light.png","alt","","height","18"],[1,"mt-auto"],[1,"mb-3"],[1,"ri-double-quotes-l","display-4","text-success"],[3,"showNavigationArrows"],["ngbSlide",""],[1,"p-lg-5","p-4"],[1,"text-primary"],[1,"text-muted"],[1,"mt-4"],[3,"ngSubmit","formGroup"],["for","useremail",1,"form-label"],[1,"text-danger"],["type","email","id","useremail","placeholder","Enter email address","required","","formControlName","email",1,"form-control",3,"ngClass"],[1,"invalid-feedback"],["for","username",1,"form-label"],["type","text","id","username","placeholder","Enter username","required","","formControlName","name",1,"form-control",3,"ngClass"],["for","userpassword",1,"form-label"],[1,"position-relative","auth-pass-inputgroup"],["placeholder","Enter password","id","password-input","aria-describedby","passwordInput","pattern","(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}","required","","formControlName","password",1,"form-control","pe-5","password-input",3,"type","ngClass"],["type","button","id","password-addon",1,"btn","btn-link","position-absolute","end-0","top-0","text-decoration-none","text-muted","password-addon"],[1,"ri-eye-fill","align-middle",3,"click","ngClass"],[1,"mb-0","fs-12","text-muted","fst-italic"],["href","javascript:void(0);",1,"text-primary","text-decoration-underline","fst-normal","fw-medium"],["id","password-contain",1,"p-3","bg-light","mb-2","rounded"],[1,"fs-13"],["id","pass-length",1,"invalid","fs-12","mb-2"],["id","pass-lower",1,"invalid","fs-12","mb-2"],["id","pass-upper",1,"invalid","fs-12","mb-2"],["id","pass-number",1,"invalid","fs-12","mb-0"],["type","submit",1,"btn","btn-success","w-100"],[1,"mt-4","text-center"],[1,"signin-other-title"],[1,"fs-13","mb-4","title","text-muted"],[1,"d-flex","gap-2","justify-content-center"],["type","button",1,"btn","btn-primary","btn-icon","waves-effect","waves-light"],[1,"ri-facebook-fill","fs-16"],["type","button",1,"btn","btn-danger","btn-icon","waves-effect","waves-light"],[1,"ri-google-fill","fs-16"],["type","button",1,"btn","btn-dark","btn-icon","waves-effect","waves-light"],[1,"ri-github-fill","fs-16"],["type","button",1,"btn","btn-info","btn-icon","waves-effect","waves-light"],[1,"ri-twitter-fill","fs-16"],[1,"mt-5","text-center"],[1,"mb-0"],["routerLink","/auth/signin/cover",1,"fw-semibold","text-primary","text-decoration-underline"],[1,"footer"],[1,"text-center"],[1,"mdi","mdi-heart","text-danger"],[1,"carousel-inner","text-center","text-white-50","pb-5"],[1,"carousel-item","active"],[1,"fs-15","fst-italic"]],template:function(a,t){1&a&&(e.j41(0,"div",0),e.nrm(1,"div",1),e.j41(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9),e.nrm(10,"div",1),e.j41(11,"div",10)(12,"div",11)(13,"a",12),e.nrm(14,"img",13),e.k0s()(),e.j41(15,"div",14)(16,"div",15),e.nrm(17,"i",16),e.k0s(),e.j41(18,"ngb-carousel",17),e.DNE(19,k,4,0,"ng-template",18)(20,j,4,0,"ng-template",18)(21,E,4,0,"ng-template",18),e.k0s()()()()(),e.j41(22,"div",8)(23,"div",19)(24,"div")(25,"h5",20),e.EFF(26,"Register Account"),e.k0s(),e.j41(27,"p",21),e.EFF(28,"Get your Free Velzon account now."),e.k0s()(),e.j41(29,"div",22)(30,"form",23),e.bIt("ngSubmit",function(){return t.onSubmit()}),e.j41(31,"div",15)(32,"label",24),e.EFF(33,"Email "),e.j41(34,"span",25),e.EFF(35,"*"),e.k0s()(),e.nrm(36,"input",26),e.j41(37,"div",27),e.EFF(38," Please enter email "),e.k0s()(),e.j41(39,"div",15)(40,"label",28),e.EFF(41,"Username "),e.j41(42,"span",25),e.EFF(43,"*"),e.k0s()(),e.nrm(44,"input",29),e.j41(45,"div",27),e.EFF(46," Please enter username "),e.k0s()(),e.j41(47,"div",15)(48,"label",30),e.EFF(49,"Password "),e.j41(50,"span",25),e.EFF(51,"*"),e.k0s()(),e.j41(52,"div",31),e.nrm(53,"input",32),e.j41(54,"button",33)(55,"i",34),e.bIt("click",function(){return t.toggleFieldTextType()}),e.k0s()(),e.j41(56,"div",27),e.EFF(57," Please enter password "),e.k0s()()(),e.j41(58,"div",11)(59,"p",35),e.EFF(60,"By registering you agree to the Velzon "),e.j41(61,"a",36),e.EFF(62,"Terms of Use"),e.k0s()()(),e.j41(63,"div",37)(64,"h5",38),e.EFF(65,"Password must contain:"),e.k0s(),e.j41(66,"p",39),e.EFF(67,"Minimum "),e.j41(68,"b"),e.EFF(69,"8 characters"),e.k0s()(),e.j41(70,"p",40),e.EFF(71,"At "),e.j41(72,"b"),e.EFF(73,"lowercase"),e.k0s(),e.EFF(74," letter (a-z)"),e.k0s(),e.j41(75,"p",41),e.EFF(76,"At least "),e.j41(77,"b"),e.EFF(78,"uppercase"),e.k0s(),e.EFF(79," letter (A-Z)"),e.k0s(),e.j41(80,"p",42),e.EFF(81,"A least "),e.j41(82,"b"),e.EFF(83,"number"),e.k0s(),e.EFF(84," (0-9)"),e.k0s()(),e.j41(85,"div",22)(86,"button",43),e.EFF(87,"Sign Up"),e.k0s()(),e.j41(88,"div",44)(89,"div",45)(90,"h5",46),e.EFF(91,"Create account with"),e.k0s()(),e.j41(92,"div",47)(93,"button",48),e.nrm(94,"i",49),e.k0s(),e.j41(95,"button",50),e.nrm(96,"i",51),e.k0s(),e.j41(97,"button",52),e.nrm(98,"i",53),e.k0s(),e.j41(99,"button",54),e.nrm(100,"i",55),e.k0s()()()()(),e.j41(101,"div",56)(102,"p",57),e.EFF(103,"Already have an account ? "),e.j41(104,"a",58),e.EFF(105," Signin"),e.k0s()()()()()()()()()()(),e.j41(106,"footer",59)(107,"div",3)(108,"div",4)(109,"div",5)(110,"div",60)(111,"p",57),e.EFF(112),e.nrm(113,"i",61),e.EFF(114," by Themesbrand"),e.k0s()()()()()()()),2&a&&(e.R7$(18),e.Y8G("showNavigationArrows",t.showNavigationArrows),e.R7$(12),e.Y8G("formGroup",t.SignupForm),e.R7$(6),e.Y8G("ngClass",e.eq3(8,f,t.submitted&&t.f.email.errors)),e.R7$(8),e.Y8G("ngClass",e.eq3(10,f,t.submitted&&t.f.name.errors)),e.R7$(9),e.Y8G("type",t.fieldTextType?"text":"password")("ngClass",e.eq3(12,f,t.submitted&&t.f.password.errors)),e.R7$(2),e.Y8G("ngClass",e.l_i(14,w,!t.fieldTextType,t.fieldTextType)),e.R7$(57),e.SpI("\xa9 ",t.year," Velzon. Crafted with "))},dependencies:[p.YU,c.Oj,c.bD,s.qT,s.me,s.BC,s.cb,s.YS,s.R_,s.j4,s.JD,u.Wk]})}}return i})()}];let T=(()=>{class i{static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275mod=e.$C({type:i})}static{this.\u0275inj=e.G2t({imports:[u.iI.forChild(C),u.iI]})}}return i})(),x=(()=>{class i{static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275mod=e.$C({type:i})}static{this.\u0275inj=e.G2t({imports:[p.MD,c.wA,s.X1,s.YN,T]})}}return i})()}}]);