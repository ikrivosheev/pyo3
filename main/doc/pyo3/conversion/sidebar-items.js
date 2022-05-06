initSidebarItems({"trait":[["AsPyPointer","This trait represents that we can do zero-cost conversion from the object to a FFI pointer."],["FromPyObject","`FromPyObject` is implemented by various types that can be extracted from a Python object reference."],["FromPyPointer","Raw level conversion between `*mut ffi::PyObject` and PyO3 types."],["IntoPy","Defines a conversion from a Rust type to a Python object."],["IntoPyPointer","This trait allows retrieving the underlying FFI pointer from Python objects."],["PyTryFrom","Trait implemented by Python object types that allow a checked downcast. If `T` implements `PyTryFrom`, we can convert `&PyAny` to `&T`."],["PyTryInto","Trait implemented by Python object types that allow a checked downcast. This trait is similar to `std::convert::TryInto`"],["ToBorrowedObject","A deprecated conversion trait which relied on the unstable `specialization` feature of the Rust language."],["ToPyObject","Conversion trait that allows various objects to be converted into `PyObject`."]]});