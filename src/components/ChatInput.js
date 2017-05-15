import React from 'react';

export default class ChatInput extends React.PureComponent {

	componentDidMount() {
		this.refs.textMessage.focus();
	}

	onSubmit = (e) => {
		e.preventDefault();
	}

	render() {
		const {onSubmit} = this;
		const randomString = Math.random().toString(36).substring(2);
		const imageUrl = '//robohash.org/' + randomString + '?set=set2&bgset=bg2&size=70x70';
		return(
			<footer className="teal">
			  <form className="container" onSubmit={onSubmit}>
			    <div className="row">
			      <div className="input-field col s10">
			        <i className="prefix mdi-communication-chat" />
			        <input ref="textMessage" type="text" placeholder="your message" />
			        <span className="chip left">
			          <img src={imageUrl} alt={imageUrl} />
								<span>Venus Bot #{randomString}</span>
			        </span>
			      </div>
			      <div className="input-field col s2">
			        <button type="submit" className="waves-effect waves-light btn-floating btn-large">
			          <i className="mdi-content-send" />
			        </button>
			      </div>
			    </div>
			  </form>
		</footer>
		);
	}
}
