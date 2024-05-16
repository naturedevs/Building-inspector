export function ActionColumn(props: any) {
    const rowData = props.cell._cell.row.data;
    const { handleAction } = props;
 
    const handleDelete = () => {
       handleAction("delete", rowData);
    };
 
    const handleEdit = () => {      
       handleAction("edit", rowData);
    };
 
    return (
       <div className="hstack gap-2 justify-content-center border-end-0">
          <div className="btn btn-icon btn-sm btn-info" onClick={handleEdit}>
             <i className="ri-edit-line"></i></div>
          <div className="btn btn-icon btn-sm btn-danger"  onClick={handleDelete}>
             <i className="ri-delete-bin-2-line"></i></div>
       </div>
    );
  }