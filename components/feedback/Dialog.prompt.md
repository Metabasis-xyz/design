Centered modal on a flat scrim; render only when open.

```jsx
{open && <Dialog title="Cancel order" onClose={close}
  footer={<><Button variant="secondary" onClick={close}>Keep order</Button><Button variant="danger">Cancel order</Button></>}>
  Order #88213 will be removed from the book.
</Dialog>}
```
