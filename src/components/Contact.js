import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { TranslationKeysEnum } from '../data/translations/enums';
import { translate } from 'react-translate';
import { Button, Form, Input, message } from 'antd';
import sendEmail from '../utils/sendEmail';
const Contact = ({ form, t }) => {
    const [isSendingContact, setIsSendingContact] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        form.validateFieldsAndScroll(async (error, values) => {
            if (!error) {
                try {
                    setIsSendingContact(true);
                    await sendEmail(values, '/api/contact');
                    message.success(
                        t(TranslationKeysEnum.ContactUs.MESSAGE_SUCCESS),
                        10
                    );
                    form.resetFields();
                } catch (err) {
                    message.error(t(TranslationKeysEnum.ContactUs.MESSAGE_ERROR), 10);
                } finally {
                    setIsSendingContact(false);
                }
            }
        });
    };
    return (
        <div className="contact">
            <div className="container">
                <div className="contact__section">
                    <Fade left>
                        <p className="page__text">
                            {t(TranslationKeysEnum.ContactUs.NAME)}
                        </p>
                    </Fade>
                    <Form onSubmit={handleSubmit}>
                        <div className="contact__form">
                            <div className="contact__col">
                                <label className="form-label">
                                    {t(TranslationKeysEnum.ContactUs.FORM_NAME)}
                                </label>
                                <Form.Item >
                                    {form.getFieldDecorator('name', {
                                        rules: [
                                            {
                                                required: true,
                                                message: t(TranslationKeysEnum.ContactUs.FIELD_REQUIRED),
                                            },
                                        ],
                                    })(
                                        <Input
                                            className="form-control"
                                            type="text"
                                        />
                                    )}
                                </Form.Item>
                            </div>
                            <div className="contact__col">
                                <label className="form-label">
                                    {t(TranslationKeysEnum.ContactUs.FORM_EMAIL)}
                                </label>
                                <Form.Item>
                                    {form.getFieldDecorator('email', {
                                        rules: [
                                            {
                                                required: true,
                                                message: t(TranslationKeysEnum.ContactUs.FIELD_REQUIRED),
                                            },
                                            {
                                                type: 'email',
                                                message: t(TranslationKeysEnum.ContactUs.INVALID_EMAIL),
                                            },
                                        ],
                                    })(
                                        <Input
                                            className="form-control"
                                            type="email"
                                        />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="contact__form">
                            <div className="contact__col">
                                <label className="form-label">
                                    {t(TranslationKeysEnum.ContactUs.FORM_DESCRIPTION)}
                                </label>
                                <Form.Item >
                                    {form.getFieldDecorator('message', {
                                        rules: [
                                            {
                                                required: true,
                                                message: t(TranslationKeysEnum.ContactUs.FIELD_REQUIRED),
                                            },
                                        ],
                                    })(
                                        <Input.TextArea
                                            className="form-control"
                                            autoSize={{ minRows: 4, maxRows: 10 }}
                                        />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <Fade bottom>
                            <div className="contact__button">
                                <Button
                                    htmlType="submit"
                                    disabled={isSendingContact}
                                    loading={isSendingContact}
                                    className="btn btn--secondary"
                                >
                                    {t(TranslationKeysEnum.ContactUs.FORM_SUBMIT)}
                                </Button>
                            </div>
                        </Fade>
                    </Form>
                </div>
            </div>
        </div>

    );
};

export default translate(TranslationKeysEnum.ContactUs.NAME)(
    Form.create()(Contact)
);

