'use client'
import { updatePassword } from '@/app/helpers/backend';
import { useI18n } from '@/app/providers/i18n';
import { Form, Input, message } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

const ChangePassword = () => {
    const router = useRouter();
    const i18n = useI18n();
    const [form] = Form.useForm();

    const handlePassword = async (values) => {
        const postData = {
            old_password: values.old_password,
            new_password: values.new_password,
            confirm_password: values.confirm_password
        }
        const res = await updatePassword(postData);
        if (res?.error === false) {
            message.success(res.msg);
            localStorage.removeItem('token');
            window.location.reload();
            router.push('/login');
        } else {
            message.error(res.msg);
        }

    }

    return (
        <div className='p-4'>
            <h2 className='header_2 text-[#2b2b2b] font-bold capitalize'>{i18n.t('Change Password')}</h2>
            <Form onFinish={handlePassword} form={form} className='mt-6'>

                <Form.Item
                    name="old_password"
                    rules={[
                        {
                            required: true,
                            message: i18n.t("Please input your Current Password!"),
                        },
                    ]}
                >
                    <Input.Password
                        placeholder={i18n.t("Current Password *")}
                        className="rounded-none p-2 border border-[#ebedf9]"
                    />
                </Form.Item>
                <Form.Item
                    name="new_password"
                    rules={[
                        {
                            required: true,
                            message: i18n.t("Please input your New Password!"),
                        },
                    ]}
                >
                    <Input.Password
                        placeholder={i18n.t("New Password *")}
                        className="rounded-none p-2 border border-[#ebedf9]"
                    />
                </Form.Item>
                <Form.Item
                    name="confirm_password"
                    rules={[
                        {
                            required: true,
                            message: i18n.t("Please input your Retype_New Password!"),
                        },
                    ]}
                >
                    <Input.Password
                        placeholder={i18n.t("Retype New Password *")}
                        className="rounded-none p-2 border border-[#ebedf9]"
                    />
                </Form.Item>
                <button
                    htmltype="submit"
                    className="uppercase text-white bg-primary px-[32px] py-[14px] mb-[40px]"
                >
                    {i18n.t("Change Password")}
                </button>
            </Form>
        </div>
    );
};

export default ChangePassword;