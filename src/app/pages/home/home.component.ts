import { Component, OnInit } from '@angular/core'
import { JsonPlaceholderService } from '../../service/json-placeholder.service'
import { HttpClient } from '@angular/common/http';


export class Feed {
	author: any = ''
	message: any = ''
	liked: number = 0
	disliked: number = 0

	constructor(author = 'anon', message = '') {
		this.author = author
		this.message = message
	}
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	posts: Feed[] = []
	feed = new Feed()
	svc: JsonPlaceholderService
	constructor() {}

	ngOnInit() {}

	post() {
		this.posts.push(this.feed)
		// this.svc.createPost(this.feed);
		this.posts.reverse()
		this.feed = new Feed()	
	}
}
