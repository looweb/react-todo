import React from 'react';

import { Button, Form, Input, Modal } from 'antd';

import './TodoItemForm.scss';

const TodoItemForm = ({ item, onSubmit, onClose }) => {
  const [form] = Form.useForm();

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const handleSubmit = (values) => {
    if (item) {
      onSubmit(item.id, { ...item, ...values });
    } else {
      onSubmit({ ...values, isFav: false, isReady: false, date: new Date() });
    }

    handleClose();
  };

  return (
    <Modal
      visible
      title={item ? 'Editar tarea' : 'Nueva tarea'}
      footer={null}
      onCancel={handleClose}
      className="TodoItemForm-form"
    >
      <Form form={form} onFinish={handleSubmit} initialValues={item || {}}>
        <Form.Item name="text" rules={[{ required: true, message: 'Indique una nueva tarea' }]}>
          <Input />
        </Form.Item>
        <div className="TodoItemForm-form-actions">
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="primary" htmlType="submit">
            Guardar
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default TodoItemForm;
