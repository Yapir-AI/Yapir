function AutoFormTooltip({ fieldConfigItem }: { fieldConfigItem: any }) {
  return (
    <>
      {fieldConfigItem?.description && (
        <p className="text-[0.8rem] text-muted-foreground">
          {fieldConfigItem.description}
        </p>
      )}
    </>
  );
}

export default AutoFormTooltip;
