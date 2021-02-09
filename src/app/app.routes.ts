import {Routes} from '@angular/router';
export const routes: Routes = [
    {
        path:'',
        component: CategoriesComponent,
        resolve:{
            data:CategoryResolver
        }
    },
    {
        path:'questions/about/:categorySlug',
        component: CategoryQuestionsComponent,
	    resolve: {
	      data: CategoryQuestionsResolver
	  	}
    },
    {
	    path: 'question/:questionSlug',
	    component: QuestionAnswersComponent,
	    resolve: {
	      data: QuestionAnswersResolver
	  	}
	}
];