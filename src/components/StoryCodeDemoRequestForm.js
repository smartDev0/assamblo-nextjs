import React, { useState } from 'react';
import countries from 'i18n-iso-countries';
import { translate } from 'react-translate';
import PropTypes from 'prop-types';
import { Button, Form, Input, message, Select } from 'antd';
import { TranslationKeysEnum } from '../data/translations/enums';
import sendEmail from '../utils/sendEmail';
import { useLanguage } from '../contexts/LanguageProvider';
import isValidPhoneNumber from '../utils/phoneNumber';

const StoryCodeDemoRequestForm = ({ form, t }) => {
  const [isSendingContact, setIsSendingContact] = useState(false);

  const getLocalizedCountrySelectOptions = () => {
    const { translationsLocale } = useLanguage();
    const listOfCountries = countries.getNames(translationsLocale);
    return Object.values(listOfCountries);
  };

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll(async (error, values) => {
      if (!error) {
        try {
          setIsSendingContact(true);
          await sendEmail(values, '/api/story-code-demo-request');
          message.success(
            t(TranslationKeysEnum.StoryCodeDemoRequestForm.MESSAGE_SUCCESS),
            10
          );
          form.resetFields();
        } catch (err) {
          message.error(
            t(TranslationKeysEnum.StoryCodeDemoRequestForm.MESSAGE_ERROR),
            10
          );
        } finally {
          setIsSendingContact(false);
        }
      }
    });
  };

  return (
    <div className="story-code-demo-request-form">
      {' '}
      <h4 className="story-code-demo-request-form__title">
        {t(TranslationKeysEnum.StoryCodeDemoRequestForm.FORM_TITLE)}
      </h4>
      <Form onSubmit={handleSubmit} className="generic-form">
        <div className="generic-form__input-row">
          <Form.Item className="generic-form__input-wrap">
            {form.getFieldDecorator('firstName', {
              rules: [
                {
                  required: true,
                  message: t(
                    TranslationKeysEnum.StoryCodeDemoRequestForm.FIELD_REQUIRED
                  ),
                },
              ],
            })(
              <Input
                className="generic-form__input"
                placeholder={t(
                  TranslationKeysEnum.StoryCodeDemoRequestForm
                    .FORM_FIRST_NAME_FIELD_PLACEHOLDER
                )}
              />
            )}
          </Form.Item>

          <Form.Item className="generic-form__input-wrap">
            {form.getFieldDecorator('lastName', {
              rules: [
                {
                  required: true,
                  message: t(
                    TranslationKeysEnum.StoryCodeDemoRequestForm.FIELD_REQUIRED
                  ),
                },
              ],
            })(
              <Input
                className="generic-form__input"
                placeholder={t(
                  TranslationKeysEnum.StoryCodeDemoRequestForm
                    .FORM_LAST_NAME_FIELD_PLACEHOLDER
                )}
              />
            )}
          </Form.Item>
        </div>

        <div className="generic-form__input-row">
          <Form.Item className="generic-form__input-wrap">
            {form.getFieldDecorator('company', {
              rules: [
                {
                  required: true,
                  message: t(
                    TranslationKeysEnum.StoryCodeDemoRequestForm.FIELD_REQUIRED
                  ),
                },
              ],
            })(
              <Input
                className="generic-form__input"
                placeholder={t(
                  TranslationKeysEnum.StoryCodeDemoRequestForm
                    .FORM_COMPANY_FIELD_PLACEHOLDER
                )}
              />
            )}
          </Form.Item>

          <Form.Item className="generic-form__input-wrap">
            {form.getFieldDecorator('job', {
              rules: [
                {
                  required: true,
                  message: t(
                    TranslationKeysEnum.StoryCodeDemoRequestForm.FIELD_REQUIRED
                  ),
                },
              ],
            })(
              <Input
                className="generic-form__input"
                placeholder={t(
                  TranslationKeysEnum.StoryCodeDemoRequestForm
                    .FORM_JOB_FIELD_PLACEHOLDER
                )}
              />
            )}
          </Form.Item>
        </div>

        <Form.Item className="generic-form__input-wrap">
          {form.getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: t(
                  TranslationKeysEnum.StoryCodeDemoRequestForm.FIELD_REQUIRED
                ),
              },
              {
                type: 'email',
                message: t(
                  TranslationKeysEnum.StoryCodeDemoRequestForm.INVALID_EMAIL
                ),
              },
            ],
          })(
            <Input
              className="generic-form__input"
              placeholder={t(
                TranslationKeysEnum.StoryCodeDemoRequestForm
                  .FORM_EMAIL_PLACEHOLDER
              )}
              type="email"
            />
          )}
        </Form.Item>

        <div className="generic-form__input-row">
          <Form.Item className="generic-form__input-wrap">
            {form.getFieldDecorator('phoneNumber', {
              rules: [
                {
                  required: true,
                  message: t(
                    TranslationKeysEnum.StoryCodeDemoRequestForm.FIELD_REQUIRED
                  ),
                },
                {
                  validator(rule, value, callback) {
                    if (value && !isValidPhoneNumber(value)) {
                      return callback(
                        t(
                          TranslationKeysEnum.StoryCodeDemoRequestForm
                            .INVALID_PHONE_NUMBER
                        )
                      );
                    }
                    return callback();
                  },
                },
              ],
            })(
              <Input
                className="generic-form__input"
                placeholder={t(
                  TranslationKeysEnum.StoryCodeDemoRequestForm
                    .FORM_PHONE_NUMBER_FIELD_PLACEHOLDER
                )}
              />
            )}
          </Form.Item>

          <Form.Item className="generic-form__input-wrap">
            {form.getFieldDecorator('country', {
              rules: [
                {
                  required: true,
                  message: t(
                    TranslationKeysEnum.StoryCodeDemoRequestForm.FIELD_REQUIRED
                  ),
                },
              ],
            })(
              <Select
                className="generic-form__select"
                placeholder={t(
                  TranslationKeysEnum.StoryCodeDemoRequestForm
                    .FORM_COUNTRY_FIELD_PLACEHOLDER
                )}
              >
                {getLocalizedCountrySelectOptions().map(country => (
                  <Select.Option key={country}>{country}</Select.Option>
                ))}
              </Select>
            )}
          </Form.Item>
        </div>

        <Form.Item className="generic-form__input-wrap">
          {form.getFieldDecorator('message', {
            rules: [
              {
                required: true,
                message: t(
                  TranslationKeysEnum.StoryCodeDemoRequestForm.FIELD_REQUIRED
                ),
              },
            ],
          })(
            <Input.TextArea
              className="generic-form__textarea"
              placeholder={t(
                TranslationKeysEnum.StoryCodeDemoRequestForm.FORM_MESSAGE
              )}
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
          {t(TranslationKeysEnum.StoryCodeDemoRequestForm.SEND)}
        </Button>
      </Form>
    </div>
  );
};

StoryCodeDemoRequestForm.propTypes = {
  form: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate(TranslationKeysEnum.StoryCodeDemoRequestForm.NAME)(
  Form.create()(StoryCodeDemoRequestForm)
);
