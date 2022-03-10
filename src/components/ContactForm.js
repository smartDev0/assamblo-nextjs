import React, { useState } from 'react';
import { translate } from 'react-translate';
import PropTypes from 'prop-types';
import { Button, Form, Input, message } from 'antd';
import { TranslationKeysEnum } from '../data/translations/enums';
import sendEmail from '../utils/sendEmail';

const ContactForm = ({ form, t }) => {
  const [isSendingContact, setIsSendingContact] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll(async (error, values) => {
      if (!error) {
        try {
          setIsSendingContact(true);
          await sendEmail(values, '/api/contact');
          message.success(
            t(TranslationKeysEnum.ContactForm.MESSAGE_SUCCESS),
            10
          );
          form.resetFields();
        } catch (err) {
          message.error(t(TranslationKeysEnum.ContactForm.MESSAGE_ERROR), 10);
        } finally {
          setIsSendingContact(false);
        }
      }
    });
  };
  return (
    <div className="contact-form">
      {' '}
      <h4 className="contact-form__title">
        {t(TranslationKeysEnum.ContactForm.FORM_TITLE)}
      </h4>
      <p className="contact-form__description">
        {t(TranslationKeysEnum.ContactForm.FORM_DESCRIPTION)}
      </p>
      <Form onSubmit={handleSubmit} className="generic-form">
        <Form.Item className="generic-form__input-wrap">
          {form.getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: t(TranslationKeysEnum.ContactForm.FIELD_REQUIRED),
              },
              {
                type: 'email',
                message: t(TranslationKeysEnum.ContactForm.INVALID_EMAIL),
              },
            ],
          })(
            <Input
              className="generic-form__input"
              placeholder="Email"
              type="email"
            />
          )}
        </Form.Item>
        <Form.Item className="generic-form__input-wrap">
          {form.getFieldDecorator('message', {
            rules: [
              {
                required: true,
                message: t(TranslationKeysEnum.ContactForm.FIELD_REQUIRED),
              },
            ],
          })(
            <Input.TextArea
              className="generic-form__textarea"
              placeholder={t(TranslationKeysEnum.ContactForm.FORM_MESSAGE)}
              autoSize={{ minRows: 4, maxRows: 10 }}
            />
          )}
        </Form.Item>
        <Button
          htmlType="submit"
          disabled={isSendingContact}
          loading={isSendingContact}
          className="btn btn--block"
        >
          {t(TranslationKeysEnum.ContactForm.SEND)}
        </Button>
      </Form>
    </div>
  );
};

ContactForm.propTypes = {
  form: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate(TranslationKeysEnum.ContactForm.NAME)(
  Form.create()(ContactForm)
);
