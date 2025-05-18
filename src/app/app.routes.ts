import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ServiceComponent } from './features/service/service.component';
import { ContactusComponent } from './features/contactus/contactus.component';
import { FaqComponent } from './features/faq/faq.component';
import { DevelopmentComponent } from './features/faq/development/development.component';
import { CloudcomputingComponent } from './features/faq/cloudcomputing/cloudcomputing.component';
import { CloudstorageComponent } from './features/faq/cloudstorage/cloudstorage.component';
import { CybersecurityComponent } from './features/faq/cybersecurity/cybersecurity.component';
import { ItsupportComponent } from './features/faq/itsupport/itsupport.component';
import { CarbonreductionComponent } from './features/faq/carbonreduction/carbonreduction.component';
import { SocialmediaComponent } from './features/faq/socialmedia/socialmedia.component';
import { WebdesigningComponent } from './features/faq/webdesigning/webdesigning.component';
import { CarbonreductionplanComponent } from './features/service/carbonreductionplan/carbonreductionplan.component';
import { CloudsolutionsComponent } from './features/service/cloudsolutions/cloudsolutions.component';
import { DigitalmarketingComponent } from './features/service/digitalmarketing/digitalmarketing.component';
import { ProcessdevelopmentComponent } from './features/service/processdevelopment/processdevelopment.component';
import { SpecialisedconsultancyComponent } from './features/service/specialisedconsultancy/specialisedconsultancy.component';
import { WebdComponent } from './features/service/webd/webd.component';
import { MainServiceComponent } from './features/service/main-service/main-service.component';
import { PoliciesComponent } from './features/policies/policies.component';
import { PrivacyPolicyComponent } from './features/policies/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './features/policies/terms-of-use/terms-of-use.component';
import { CookiesPolicyComponent } from './features/policies/cookies-policy/cookies-policy.component';
import { AcceptableUsagePolicyComponent } from './features/policies/acceptable-usage-policy/acceptable-usage-policy.component';
import { DataProtectionPolicyComponent } from './features/policies/data-protection-policy/data-protection-policy.component';
import { BcmsComponent } from './features/policies/bcms/bcms.component';
import { QmsPolicyComponent } from './features/policies/qms-policy/qms-policy.component';
import { ModernSlaveryPolicyComponent } from './features/policies/modern-slavery-policy/modern-slavery-policy.component';
import { KnowMeComponent } from './features/know-me/know-me.component';
import { MainPolicyComponent } from './features/policies/main-policy/main-policy.component';


export const routes: Routes = [
  {path:'', component:HomeComponent},

  {path:'service', component:ServiceComponent,
    children:[
      {path:'mainservice', component:MainServiceComponent},
      {path:'carbonreductionplan', component:CarbonreductionplanComponent},
      {path:'cloudsolutions', component:CloudsolutionsComponent},
      {path:'digitalmarketing', component:DigitalmarketingComponent},
      {path:'processdevelopment', component:ProcessdevelopmentComponent},
      {path:'specialisedconsultancy', component:SpecialisedconsultancyComponent},
      {path:'webd', component:WebdComponent},
    ]
  },
  {path:'about', component:AboutComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'faq', component:FaqComponent,
    children:[
      {path:'', component:FaqComponent},
      {path:'development', component:DevelopmentComponent},
      {path:'cloudcomputing', component:CloudcomputingComponent},
      {path:'cloudstorage', component:CloudstorageComponent},
      {path:'cybersecurity', component:CybersecurityComponent},
      {path:'itsupport', component:ItsupportComponent},
      {path:'carbonreduction', component:CarbonreductionComponent},
      {path:'socialmedia', component:SocialmediaComponent},
      {path:'webdesigning', component:WebdesigningComponent},

    ]
  },
  {path:'policies', component:PoliciesComponent,
    children:[
      {path:'', component:PoliciesComponent},
      {path:'privacypolicy', component:PrivacyPolicyComponent},
      {path:'termsofuse', component:TermsOfUseComponent},
      {path:'cookiespolicy', component:CookiesPolicyComponent},
      {path:'acceptableusagepolicy', component:AcceptableUsagePolicyComponent},
      {path:'dataprotectionpolicy', component:DataProtectionPolicyComponent},
      {path:'bcms', component:BcmsComponent},
      {path:'mainpolicy', component:MainPolicyComponent},
      {path:'qmspolicy', component:QmsPolicyComponent},
      {path:'modernslaverypolicy', component:ModernSlaveryPolicyComponent},
    ]
  },
  {path:'knowme', component:KnowMeComponent},


  {path:'**', redirectTo:'', pathMatch:'full' }

];
