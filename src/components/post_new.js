import React, {Component, PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';


import {createPost} from '../actions/index';


const required = value => value ? undefined : 'Required';


class PostNew extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props);
    }


    render() {

        const {handleSubmit, pristine, reset, submitting} = this.props;

        const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
            <div className="form-group">
                <label>{label}</label>
                <input {...input} placeholder={label} type={type} className="form-control"/>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        );

        return (
            <div>
                <h3>Create new post</h3>
                <hr/>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="form-group">
                        <Field name="title"
                               label="Title"
                               component={renderField}
                               validate={required}
                               type="text"
                               placeholder="Post title"
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <Field name="categories"
                               label="Categories"
                               component={renderField}
                               validate={required}
                               type="text"
                               placeholder="Post categories"
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <Field name="content" component="textarea" className="form-control"/>
                    </div>
                    <div className="clearfix">
                        <button type="button"
                                disabled={pristine || submitting}
                                onClick={reset}
                                className="btn btn-danger pull-right">Reset form
                        </button>
                        <button type="submit"
                                disabled={submitting}
                                className="btn btn-success pull-right">Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

// Decorate form component
PostNew = reduxForm({
    form: 'PostNewForm' // unique name
})(PostNew);

export default connect(null, {createPost})(PostNew);